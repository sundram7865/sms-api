import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

// ✅ Create a MySQL connection pool
export const db = mysql.createPool({
  connectionLimit: 10, // Adjust as needed
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// ✅ Test a connection from the pool
db.getConnection((err, connection) => {
  if (err) {
    console.error(" MySQL connection error:", err);
    process.exit(1);
  } else {
    console.log(" Connected to MySQL database.");
    connection.release(); // Always release back to the pool
  }
});
