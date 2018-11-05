import React from 'react';
import {Route , Switch , Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import NavigationBar from '../components/NavigationBar';
import LoginComponent from '../components/LoginComponent';
import ProjectContainer from '../containers/ProjectContainer';
import TaskContainer from '../containers/TaskContainer';
import NotFound from '../components/NotFound';

class TaskTracker extends React.Component {
    constructor(props){
        super(props);
        this.showAlert = this.showAlert.bind(this);
    }
    showAlert() {
        alert('add a project first');
    }
    componentDidMount(){
        this.props.dispatch({type:'fetch_projects'});
        this.props.dispatch({type:'fetch_tasks'});
        const token = localStorage.getItem('token');
        if (token === 'true' ) {
            this.props.dispatch({ type:'verify_user',response:true});
        }
    }
    render(){
        return(
            <div className="container-fluid">
                <NavigationBar />
                <Switch>
                    <Route path ="/" exact component={LoginComponent}/>
                    {this.props.isAuth ? <Route path ="/projects" component={ProjectContainer} /> : <Redirect to='/' />}
                    {this.props.projects.length > 0 ? <Route path="/tasks"  component={TaskContainer}/> : <Redirect to="/projects"/>} 
                    <Redirect to="/" />
                </Switch> 
            </div>
        )
    }
}


const mapStateToProps = state => ({projects:state.projects,isAuth:state.isAuthenticated});

export default withRouter(connect(mapStateToProps)(TaskTracker));