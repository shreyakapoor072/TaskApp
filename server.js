const express = require('express');
const mongoose = require('mongoose');// to work on mongodb
const bodyParser = require('body-parser');
const app = express();
const projectRoutes = require('./routes/Project');
const taskRoutes = require('./routes/Task');
const userRoutes = require('./routes/User');


const PORT = 5000;
const db = 'mongodb://localhost:27017/taskapp';

mongoose.connect(db,{useNewUrlParser: true})
.then(
    ()=>{console.log("database connected")},
    err=>{console.log('error',err)}
)

app.use(bodyParser.json());


app.use('/projects',projectRoutes);
app.use('/tasks',taskRoutes);
app.use('/authenticate',userRoutes);

app.listen(PORT,()=>console.log('Server started'));