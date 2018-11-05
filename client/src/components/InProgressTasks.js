import React from 'react';
import Task from './Task';

class InprogressTasks extends React.Component {
    constructor(props){
        super(props);
        this.state={inprogress:true}
    }
    render(){
        var inprogressData = this.props.tasks.filter((item) => item.status === 'inprogress');
        var inprogressTasks = inprogressData.map((item)=>{
            return (<Task key={item._id} {...item} inprogress={this.state.inprogress}/>)
        })
        return(
            <div className="col-4">
                <h4>Inprogress</h4>
                {inprogressTasks}
            </div> 
        )
    }
}
 

export default InprogressTasks;