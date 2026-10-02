const Database = require("better-sqlite3");
const path = require("path");

const dbPath = path.join(__dirname, "cybershield.db");

const db = new Database(dbPath);

// ===============================
// ENROLLMENTS TABLE
// ===============================

db.exec(`
    CREATE TABLE IF NOT EXISTS enrollments (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        full_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        country TEXT NOT NULL,
        experience TEXT NOT NULL,
        message TEXT,
        course TEXT DEFAULT 'Cybersecurity Fundamentals',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

// ===============================
// ADMINS TABLE
// ===============================

db.exec(`
    CREATE TABLE IF NOT EXISTS admins (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password_hash TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
`);

console.log("CyberShield database connected.");

module.exports = db;