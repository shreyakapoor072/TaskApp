import axios from 'axios';

export const fetchProjects =  function() {    
    return axios.get('/projects');
};

export const fetchTasks = function() {
    return axios.get('/tasks');
}

export const addProject = function(project) {
    return axios.post('/projects',project);
}

export const addTask = function(task) {
    return axios.post('/tasks',task);
}

export const updateTask = function(id,value){
    return axios.put(`/tasks/${id}`,{status:value});
}

export const updateTime = function(id,value){
    return axios.put(`/tasks/updatetime/${id}`,{time:value});
}

export const checkUser = function(user){
    return axios.post('/authenticate',user);
}

