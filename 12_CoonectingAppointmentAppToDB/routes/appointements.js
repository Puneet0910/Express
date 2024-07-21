const express = require('express');
const router = express.Router();
const appointmentController = require('../controller/appointmentController');

// Route to get all appointments
router.get('/', appointmentController.findAll);

// Route to create a new appointment
router.post('/', appointmentController.create);

// Route to delete an appointment
router.delete('/:id', appointmentController.delete);

module.exports = router;
