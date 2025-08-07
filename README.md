# 🏫 School Management System API

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com)

A **pure backend API** for managing school data, built using **Node.js**, **Express.js**, and **MySQL**. It provides endpoints to create schools and fetch them based on user location (latitude & longitude), sorted by proximity.

---

## 📁 Folder Structure

```
school-api/
├── config/
│   └── db.js                 # MySQL connection setup
├── controllers/
│   └── schoolController.js   # Route logic for school operations
├── routes/
│   └── schoolRoutes.js       # Express route definitions
├── utils/
│   └── distanceCalculator.js # Utility to calculate geo-distance
├── .env                      # Environment variables
├── .gitignore                # Ignored files/folders
├── app.js                    # Main server entry point
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

---

## 🚀 Features

- ✅ Add new schools with latitude and longitude
- 📍 Get list of schools sorted by distance from user’s current location
- 🌐 RESTful API structure
- 🔐 Environment variables with `.env` support
- 💡 Modular and scalable code structure

---

## 📦 Installation

```bash
git clone https://github.com/your-username/school-api.git
cd school-api
npm install
```

---

## ⚙️ Environment Setup

Create a `.env` file in the root:

```env
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_mysql_database
PORT=5000
```

---

## 🧪 API Endpoints
 deployed on render -https://sms-api-mj6k.onrender.com
### 1. 📍 Get Schools Sorted by Distance
   
**GET** `/api/listSchools?latitude=XX.XXXX&longitude=YY.YYYY`

- Returns all schools sorted by proximity to provided coordinates.

### 2. ➕ Add New School

**POST** `/api/addSchool`

```json
{
  "name": "St. Xavier School",
  "address": "Delhi, India",
  "latitude": 28.6139,
  "longitude": 77.2090
}
```

---

## 🧠 Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL (Clever Cloud compatible)
- **Hosting:** Render.com (for API), Clever Cloud (for MySQL)

---



## 🙌 Acknowledgements

- [Node.js](https://nodejs.org)
- [Express.js](https://expressjs.com)
- [MySQL](https://www.mysql.com)
