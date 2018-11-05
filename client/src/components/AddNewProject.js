import React from 'react';
import {connect} from 'react-redux';

class AddNewProject extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.projname = React.createRef();
        this.projdesc = React.createRef();
        this.projtype = React.createRef();
        this.getProjDetails = this.getProjDetails.bind(this);
        this.saveProjectDetails = this.saveProjectDetails.bind(this);
    }

    getProjDetails(e) {
        this.setState({[e.target.name] : e.target.value});
    }
    saveProjectDetails(e) {
        e.preventDefault();
        this.props.dispatch({type:'new_project',value:this.state});
        this.projname.current.value = '';
        this.projdesc.current.value = '';
        this.projtype.current.value = '';
    }
    render(){
        return (
            <div className="col-6 mt-4 ml-2">
                <form onSubmit={this.saveProjectDetails}> 
                    <div className="form-group">
                        <input type="text" id="name" ref={this.projname} name="proj_name" className="form-control" placeholder="PROJECT NAME" onChange={this.getProjDetails}/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="desc" ref={this.projdesc} name="proj_desc" className="form-control" placeholder="PROJECT DESC" onChange={this.getProjDetails}/>
                    </div>
                    <div className="form-group">
                        <input type="text" id="type" ref={this.projtype} name="proj_type" className="form-control" placeholder="PROJECT TYPE" onChange={this.getProjDetails}/>
                    </div>
                    <button className="btn btn-info" type="submit">Save</button>
                </form>
            </div>
        )
    }
}

export default connect()(AddNewProject);