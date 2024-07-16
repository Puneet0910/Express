const express = require('express');
const path = require('path');
const rootDir = require('../utility/paths');

const routes = express.Router();
const contactPage = require('../controllers/contactUs');

routes.post('/success', contactPage.postContact);

module.exports = routes;