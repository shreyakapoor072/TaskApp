import {delay} from 'redux-saga';
import store from './store';
import {call , put , takeLatest,takeEvery} from 'redux-saga/effects';
import {fetchProjects , fetchTasks , addProject , addTask , updateTask , checkUser , updateTime} from './api';


function* fetchProjectsData() {
    var projects = yield call(fetchProjects);
    yield put({type:'get_projects',response:projects.data});
}

function* fetchTasksData(){
    var tasks = yield call(fetchTasks);
    yield put({type:'get_tasks',response:tasks.data});
}

function* addNewProject(data) {
    var newProject = yield call(addProject,data.value);
    if(!newProject.data)
    alert('Either project already exists or project name field is empty');
    else {
        yield put({type:'add_project',response:newProject.data});
        alert('project added successfully');
    }    
}

function* addNewTask(data) {
    var newTask = yield call(addTask,data.value);
    if(!newTask.data)
    alert('Task name is required');
    else {
        yield put({type:'add_task',response:newTask.data});
        alert('task added successfully');
    }    
}

function* changeTaskStatus(data){
    var updatedTask = yield call(updateTask,data.task_id,data.new_status);
    yield put({type:'update_status',response:updatedTask.data});
}

function* validateUser(data){
    var authStatus = yield call(checkUser,data.value);
    if(!authStatus.data) {
        alert("Incorrect email or password");
    } else {
        yield put({type:'verify_user',response:authStatus.data});
        localStorage.setItem('token', authStatus.data);
    }
}


function* updateTaskTime(data){
    var updatedTask = yield call(updateTime,data.id,data.value);
    yield put({type:'set_time',response:updatedTask.data});
}


export default function* rootSaga () {
    yield takeLatest('user_data',validateUser);
    yield takeLatest('fetch_projects',fetchProjectsData);
    yield takeLatest('fetch_tasks',fetchTasksData);
    yield takeEvery('new_project',addNewProject);
    yield takeEvery('new_task',addNewTask);
    yield takeEvery('change_status',changeTaskStatus);
    yield takeEvery('update_time',updateTaskTime);
}