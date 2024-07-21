const mysql = require('mysql2');

// Create and configure the connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'appointmentDB'
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Database connection error:', err);
    } else {
        console.log('Connected to the MySQL database.');
    }
});

module.exports = db;
