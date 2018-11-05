import React from 'react';
import Task from './Task';

class UnstartedTasks extends React.Component {
    constructor(props){
        super(props);
        this.state={unstarted:true}
    }
    render(){
        var unstartedData = this.props.tasks.filter((item) => item.status === 'unstarted');
        var unstartedTasks = unstartedData.map((item)=>{
            return (<Task key={item._id} {...item} unstarted={this.state.unstarted}/>)
        })
        return(
            <div className="col-4">
                <h4>Unstarted</h4>
                {unstartedTasks}
            </div> 
        )
    }
}
 

export default UnstartedTasks;