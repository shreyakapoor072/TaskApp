const express = require('express');
var router = express.Router();
const Project = require('../models/Project');

router.get('/',(req,res)=>{
    Project.find()
    .then(projects => res.json(projects));
})

router.post('/',(req,res)=>{
    const newproject = new Project({
        proj_name: req.body.proj_name,
        proj_desc: req.body.proj_desc,
        proj_type: req.body.proj_type
    })

    newproject.save()
    .then(project => res.json(project))
    .catch(err=>res.send(false))
})


module.exports = router;