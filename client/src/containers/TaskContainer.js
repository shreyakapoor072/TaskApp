import React from 'react';
import {Route} from 'react-router-dom';
import SideBar from '../components/SideBar';
import AddNewTask from '../components/AddNewTask';
import TasksView from '../components/TasksView';

const TaskContainer = ({match}) => {
    const taskNavItems = [{
        id:0,
        name:'New Task',
        path:'addtask'
    },
    {
        id:1,
        name:'List Task',
        path:'viewtasks'
    }];
    return(
        <div className="project-container row">
        <div className="col-4">
            <SideBar url={match.url} navItems={taskNavItems}/>
        </div>
        <div className="col-8"> 
            <Route path={match.url} exact component={AddNewTask}/>
            <Route path={`${match.url}/addtask`} component={AddNewTask} />
            <Route path={`${match.url}/viewtasks`}  component={TasksView}/>
        </div>    
    </div>
    )
}

export default TaskContainer;