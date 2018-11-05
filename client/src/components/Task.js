import React from 'react';
import StatusDropdown from './StatusDropdown'
import Timer from './Timer';

const Task = (props) => {
    return (
        <div className="card shadow mb-3 p-2">
        <p>{props.task_name}</p>
        <p>{props.proj_name}</p>
        <StatusDropdown id={props._id} {...props}/>
        {props.inprogress && <Timer time={props.time} id={props._id} />}
        </div>
    )
}

export default Task;