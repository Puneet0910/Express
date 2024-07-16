const express = require('express');
const path = require('path');
const routes = express.Router();
const rootDir = require('../utility/paths'); 
routes.get('/addProduct',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'Views','addProduct.html'));
});

routes.post('/addProduct', (req,res,next)=>{
    res.redirect('/');
})

module.exports = routes;