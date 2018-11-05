const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = Schema({
    proj_name:{
        type:String,
        required:true,
        unique:true
    },
    proj_desc:{
        type:String
    },
    proj_type:{
        type:String
    }
})

module.exports =  mongoose.model('project',projectSchema);