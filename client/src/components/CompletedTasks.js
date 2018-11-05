import React from 'react';
import Task from './Task';

class CompletedTasks extends React.Component {
    constructor(props){
        super(props);
        this.state={completed:true}
    }
    render(){
        var completedData = this.props.tasks.filter((item) => item.status === 'completed');
        var completedTasks = completedData.map((item)=>{
            return (<Task key={item._id} {...item} completed={this.state.completed}/>)
        })
        return(
            <div className="col-4">
                <h4>Completed</h4>
                {completedTasks}
            </div> 
        )
    }
}
 

export default CompletedTasks;