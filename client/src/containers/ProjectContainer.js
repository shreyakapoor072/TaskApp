import React from 'react';
import {Route} from 'react-router-dom';
import SideBar from '../components/SideBar';
import AddNewProject from '../components/AddNewProject';
import ProjectListView from '../components/ProjectListView';
import ProjectWiseTasks from '../components/ProjectWiseTasks';

const ProjectContainer = ({match}) => {
    const projectNavItems = [{
        id:0,
        name:'New Project',
        path:'addproject'
    },
    {
        id:1,
        name:'List Project',
        path:'listproject'
    }];
    return(
        <div className="project-container row">
        <div className="col-4">
            <SideBar url={match.url} navItems={projectNavItems}/>
        </div>
        <div className="col-8"> 
            <Route path={match.url} exact component={AddNewProject}/>
            <Route path={`${match.url}/addproject`} component={AddNewProject} />
            <Route exact path={`${match.url}/listproject`}  component={ProjectListView}/>
            <Route path={`${match.url}/listproject/:id`} component={ProjectWiseTasks} />
        </div>    
    </div>
    )
}

export default ProjectContainer;