const express = require('express');
const path = require('path');
const rootDir = require('../utility/paths');

const routes = express.Router();

// routes.get('/success',(req,res,next)=>{
//     res.sendFile(path.join(rootDir, 'Views', 'success.html'));
// })
routes.post('/success', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'Views', 'success.html'));
});
module.exports = routes;