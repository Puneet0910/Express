const rootDir = require('../utility/paths');
const path = require('path');

exports.getContact = (req,res,next)=>{
    res.sendFile(path.join(rootDir, 'Views', 'contact.html'))
}

exports.postContact = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'Views', 'success.html'));
}