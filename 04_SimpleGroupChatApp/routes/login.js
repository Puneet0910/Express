const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head><title>Login</title></head>
        <body>
        <form id="loginForm" method="POST" action="/login">
            <input type="text" id="username" name="username" required>
            <button type="submit">Login</button>
        </form>
        <script>
            document.getElementById('loginForm').addEventListener('submit', function(event) {
                event.preventDefault();
                const username = document.getElementById('username').value;
                localStorage.setItem('username', username);
                this.submit();
            });
        </script>
        </body>
        </html>
    `);
});

router.post('/login', (req, res, next) => {
    res.redirect('/');
});

module.exports = router;
