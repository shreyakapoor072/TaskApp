import React from 'react';
import {connect} from 'react-redux';

class AddNewTask extends React.Component {
    constructor(props){
        super(props);
        this.projRef = React.createRef();
        this.state = {status:'unstarted'};
        this.nameRef = React.createRef();
        this.descRef = React.createRef();
        this.getTaskDetails = this.getTaskDetails.bind(this);
        this.getDropDownValue = this.getDropDownValue.bind(this);
        this.saveTaskDetails = this.saveTaskDetails.bind(this);
    }
    componentDidMount(){
        var defaultValue = this.projRef.current.value;
        this.setState({proj_name:defaultValue});
    }
    getTaskDetails(e) {
        e.preventDefault();
        this.setState({[e.target.name]:e.target.value});
    }
    getDropDownValue(e) {
       var selectedValue = e.target.options[e.target.selectedIndex].value;
       this.setState({[e.target.name]:selectedValue});
    }
    saveTaskDetails(e){
        e.preventDefault();
        this.props.dispatch({type:'new_task',value:this.state});
        this.nameRef.current.value = '';
        this.descRef.current.value = '';
    }
    render(){
        const projectsList = this.props.projects.map((item,index)=>{
            return (
                <option key={index} value={item.proj_name}>{item.proj_name}</option>
            )
        })
        return (
            <div className="col-6 mt-4 ml-2">
                <form  onSubmit={this.saveTaskDetails}> 
                    <div className="form-group">
                        <input type="text" id="name" ref={this.nameRef} name="task_name" className="form-control" placeholder="TASK NAME" onChange={this.getTaskDetails}/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="desc" ref={this.descRef} name="task_desc" className="form-control" placeholder="TASK DESC" onChange={this.getTaskDetails}/>
                    </div>
                    <div className="form-group">
                        <select className="form-control" ref={this.projRef} name="proj_name"  onChange={this.getDropDownValue}>
                            {projectsList}
                        </select>
                    </div>    
                    <div className="form-group">
                        <select className="form-control" name="status" onChange={this.getDropDownValue}>
                            <option value="unstarted" >Unstarted</option>
                            <option value="inprogress">InProgress</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <button className="btn btn-info" type="submit">Save</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({projects:state.projects});

export default connect(mapStateToProps)(AddNewTask);