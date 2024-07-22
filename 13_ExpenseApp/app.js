const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./util/db');
const expenseRoutes = require('./routes/expenseRoute');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', expenseRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

sequelize.sync()
    .then(result => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    })
    .catch(err => {
        console.error('Error synchronizing database:', err);
    });
