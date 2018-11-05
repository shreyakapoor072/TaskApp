const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = Schema({
    task_name:{
        type:String,
        required:true
    },
    task_desc:{
        type:String
    },
    proj_name:{
        type:String
    },
    status:{
        type:String,
        default:'unstarted'
    },
    time:{
        type:Number,
        default:0
    }
})

module.exports = mongoose.model('task',taskSchema);