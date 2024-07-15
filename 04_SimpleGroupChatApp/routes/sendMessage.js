const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const messageFilePath = path.join(__dirname, 'messages.txt');

// Middleware to parse URL-encoded bodies
router.use(express.urlencoded({ extended: true }));

// Serve the form and messages
router.get('/', (req, res, next) => {
    fs.readFile(messageFilePath, 'utf-8', (err, data) => {
        if (err && err.code === 'ENOENT') {
            // File does not exist, create an empty file
            fs.writeFile(messageFilePath, '', 'utf-8', (err) => {
                if (err) return next(err);
                sendForm(res, '');
            });
        } else if (err) {
            return next(err);
        } else {
            sendForm(res, data);
        }
    });
});

function sendForm(res, messages) {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head><title>Messages</title></head>
        <body>
        <form method="POST">
            <input type="text" id="message" name="message" required placeholder="Enter your message">
            <input type="hidden" id="username" name="username">
            <button type="submit">Send</button>
        </form>
        <h6>Messages:</h6>
        <pre>${messages}</pre>
        <script>
            document.getElementById('username').value = localStorage.getItem('username') || '';
        </script>
        </body>
        </html>
    `);
}

router.post('/', (req, res, next) => {
    const username = req.body.username;
    const message = req.body.message;

    if (!username || !message) {
        return res.status(400).send('Username and message are required.');
    }

    fs.appendFile(messageFilePath, `${username}: ${message}\n`, 'utf-8', (err) => {
        if (err) return next(err);
        res.redirect('/');
    });
});

module.exports = router;
