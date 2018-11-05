import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const NavigationBar = (props) => {
    const signOut = () => {
        localStorage.setItem('token',false);
        props.dispatch({type:'verify_user',response:false});
    }
    return(
        <div className="navbar bg-info mb-4">
            <h3 className="navbar-brand text-white col">Task Application</h3>
            <ul className="nav col">
                <li className="nav-item col-4"><Link className="nav-link text-white" to="/projects">Projects</Link></li>
                <li className="nav-item col-4"><Link className="nav-link text-white" to="/tasks">Tasks</Link></li>
                {props.isAuth ? <li className="nav-item col-4"><Link className="nav-link text-white" to="/" onClick={signOut} >Sign Out</Link></li> : <li className="nav-item col-4"><Link className="nav-link text-white" to="/">Sign In</Link></li>}
            </ul>
        </div>
    )
}
const mapStateToProps = state => ({
    isAuth : state.isAuthenticated
})

export default connect(mapStateToProps)(NavigationBar);