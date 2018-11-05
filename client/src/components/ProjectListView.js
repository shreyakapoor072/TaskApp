import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const ProjectListView = ({match:{path},...props}) => {
    const projectList = props.projects.map((item) => {
        return (
            <p key={item._id} className="d-flex justify-content-between border-secondary border-bottom">
                <Link style={{textDecoration: "none"}} to={`${path}/${item.proj_name}`} className="p-2">{item.proj_name}</Link>            
                <span className="p-2">{item.proj_desc}</span>
                <span className="p-2">{item.proj_type}</span>
            </p>
        )
    });

    return (        
        <div className="col-6">
            <h3 className="mt-3 mb-3">Projects</h3>
            <p className="d-flex justify-content-between border-secondary border-bottom">
                <span className="p-2 font-weight-bold">Name</span>
                <span className="p-2 font-weight-bold">Desc</span>
                <span className="p-2 font-weight-bold">Type</span>
            </p>
            {projectList}
        </div>
    )
}


const mapStateToProps = state => ({projects:state.projects});

export default connect(mapStateToProps)(ProjectListView);