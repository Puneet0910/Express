const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const db = require('./db'); // Import database connection
const appointmentRoutes = require('./routes/appointements'); // Import routes

app.use(cors());
app.use(bodyParser.json());

// Use the appointment routes
app.use('/appointments', appointmentRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
 