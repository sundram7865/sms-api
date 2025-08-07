import { db } from '../config/db.js';
import { getDistanceFromLatLonInKm } from '../utils/distanceCalculator.js';

export const addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Check if the school already exists (based on name and address)
  const checkSql = "SELECT * FROM schools WHERE name = ? AND address = ?";
  db.query(checkSql, [name, address], (checkErr, checkResults) => {
    if (checkErr) return res.status(500).json({ error: checkErr.message });

    if (checkResults.length > 0) {
      return res.status(409).json({ error: " School already exists." });
    }

    // If not exists, insert the new school
    const insertSql = "INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)";
    db.query(insertSql, [name, address, latitude, longitude], (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: "School added successfully!", id: result.insertId });
    });
  });
};

export const listSchools = (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: "Latitude and longitude are required." });
  }

  const sql = "SELECT * FROM schools";
  db.query(sql, (err, schools) => {
    if (err) return res.status(500).json({ error: err.message });

    const sorted = schools.map((school) => {
      const distance = getDistanceFromLatLonInKm(
        parseFloat(latitude),
        parseFloat(longitude),
        school.latitude,
        school.longitude
      );
      return { ...school, distance: distance.toFixed(2) };
    }).sort((a, b) => a.distance - b.distance);

    res.status(200).json({ schools: sorted });
  });
};