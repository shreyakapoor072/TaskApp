const express = require('express');
var router = express.Router();
const Task = require('../models/Task');

router.get('/',(req,res)=>{
    Task.find()
    .then(tasks => res.json(tasks));
})

router.post('/',(req,res)=>{
    const newtask = new Task({
        task_name: req.body.task_name,
        task_desc: req.body.task_desc,
        proj_name: req.body.proj_name,
        status: req.body.status
    })

    newtask.save()
    .then(task => res.json(task))
    .catch(err=>res.send(false));
})

router.put('/:id',(req,res)=>{
    const id = req.params.id;
    Task.findByIdAndUpdate(id, { $set: { status: req.body.status }}, { new: true }, function (err, task) {
        if (err) console.log("error");
        res.json(task);
      });

})

router.put('/updatetime/:id',(req,res)=>{
    const id = req.params.id;
    Task.findByIdAndUpdate(id, { $set: { time: req.body.time }}, { new: true }, function (err, task) {
        if (err) console.log("error");
        res.json(task);
      });

})

module.exports = router;