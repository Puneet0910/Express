const express = require('express');
const adminRoute = require('./Routes/admin');
const shopRoute = require('./Routes/shop');
const contactRoute = require('./Routes/contact');
const successRoute = require('./Routes/success');
const bodyParse = require('body-parser');
const app = express();
const path = require('path');
app.use(bodyParse.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname,'Public')));

app.use(adminRoute);
app.use(shopRoute);
app.use(contactRoute);
app.use(successRoute);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'Views', 'fileNotFound.html'));
})

app.listen(3000);
