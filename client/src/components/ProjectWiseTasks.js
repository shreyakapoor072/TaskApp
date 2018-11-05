import React from 'react';
import {connect} from 'react-redux';

const ProjectWiseTasks = (props) => {
    const project = props.match.params.id;
    const filteredTasks = props.tasks.filter((item)=>item.proj_name === project);
    const taskList = filteredTasks.map((task)=>{
        return(
            <p key={task._id} className="d-flex justify-content-between border-secondary border-bottom">
                <span className="p-2">{task.task_name}</span>
                <span className="p-2">{task.status}</span>
            </p>
        )
    })
    return(
        <div className="col-4">
            <h3 className="mt-3 mb-3">Tasks</h3>
            <p className="d-flex justify-content-between border-secondary border-bottom">
                <span className="p-2 font-weight-bold">Name</span>
                <span className="p-2 font-weight-bold">Status</span>
            </p>
            {taskList}
        </div>
    )
}

const mapStateToProps = state => ({tasks : state.tasks});

export default connect(mapStateToProps)(ProjectWiseTasks);