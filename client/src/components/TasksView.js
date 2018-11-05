import React from 'react';
import {connect} from 'react-redux';
import UnstartedTasks from './UnstartedTasks';
import InProgressTasks from './InProgressTasks';
import CompletedTasks from './CompletedTasks';

const TasksView = (props) => {
   
    return (        
        <div className="row mt-4">
            <UnstartedTasks tasks = {props.tasks}/>
            <InProgressTasks tasks = {props.tasks} />
            <CompletedTasks tasks = {props.tasks}/>
        </div>
    )
}

const mapStateToProps = state => ({tasks:state.tasks});

export default connect(mapStateToProps)(TasksView);