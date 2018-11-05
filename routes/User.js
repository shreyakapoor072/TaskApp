const express = require('express');
var router = express.Router();
const User = require('../models/User');

router.post('/',(req,res)=>{
    User.authenticate(req.body.user_email,req.body.user_password,(err,user)=>{
        if(err) 
            res.send(false);
        else {
            res.send(true);
        }
    });
})


module.exports = router;