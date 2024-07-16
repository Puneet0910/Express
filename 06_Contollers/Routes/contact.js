const express = require('express');
const path = require('path');
const routes = express.Router();
const rootDir = require('../utility/paths');
routes.get('/contactUs',(req,res,next)=>{
    res.sendFile(path.join(rootDir, 'Views', 'contact.html'))
})

module.exports = routes;