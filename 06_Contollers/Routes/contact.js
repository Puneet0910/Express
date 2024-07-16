const express = require('express');

const routes = express.Router();

const contactPage = require('../controllers/contactUs');

routes.get('/contactUs', contactPage.getContact)

module.exports = routes;