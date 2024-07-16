const express = require('express');
const path = require('path');
const routes = express.Router();
const rootDir = require('../utility/paths');
routes.get('/',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'Views', 'shop.html'));
});

module.exports = routes; 