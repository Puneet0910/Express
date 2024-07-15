const express = require('express');

const route = express.Router();

route.get('/add-product', (req,res,next)=>{
    res.send(`
    <html>
    <head>
    <title>Add Items</title>
    </head>
    <body>
    <form action="/product" method="POST">
    <input type="text" name="title">
    <button type="submit">Submit</button>
    </form>
    </body>
    </html>
    `);
})
route.post('/product', (req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
})



module.exports = route;