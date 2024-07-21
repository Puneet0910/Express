const db = require('../db');

// Retrieve all appointments
exports.findAll = (req, res) => {
    db.query('SELECT * FROM user', (err, results) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.json(results);
    });
};

// Create a new appointment
exports.create = (req, res) => {
    const { username, email, phone } = req.body;
    const query = 'INSERT INTO user (username, email, phone) VALUES (?, ?, ?)';
    db.query(query, [username, email, phone], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        const newAppointment = { id: result.insertId, username, email, phone };
        res.status(201).json(newAppointment);
    });
};

// Delete an appointment
exports.delete = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM user WHERE id = ?', [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        res.status(204).end();
    });
};
