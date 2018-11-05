import React from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

class LoginComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
        this.getFormDetails = this.getFormDetails.bind(this);
        this.postFormData = this.postFormData.bind(this);
    }
    getFormDetails(e){
        this.setState({[e.target.name]:e.target.value});
    }
    postFormData(e){
        e.preventDefault();
        this.props.dispatch({type:'user_data',value:this.state});
    }
    render(){
        return(
        <div className="login-form col-4" style={{marginTop:'40px'}}>
            <form action="/login" >
                <div className="form-group">
                    <input type="text" id="email" name="user_email" className="form-control" placeholder="EMAIL" onChange={this.getFormDetails}/>
                </div>
                <div className="form-group">
                    <input type="password" id="password" name="user_password" className="form-control" placeholder="PASSWORD" onChange={this.getFormDetails}/>
                </div>
                <button className="btn btn-info" type="submit" onClick={this.postFormData}>Login</button>
                {this.props.isAuth && (
                    <Redirect to='/projects'/>
                )}
            </form>
        </div>
        )
    }
}
const mapStateToProps = state => ({isAuth:state.isAuthenticated});

export default connect(mapStateToProps)(LoginComponent);