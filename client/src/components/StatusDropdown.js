import React from 'react';
import {connect} from 'react-redux';

class StatusDropdown extends React.Component {
    constructor(props){
        super(props);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }
    handleDropdownChange(e) {
        var index = e.target.getAttribute('id'),
        selectedValue = e.target.options[e.target.selectedIndex].value;
        this.props.dispatch({type:'change_status',task_id:index,new_status:selectedValue});
    }
    render(){
        return(
            <select id={this.props.id} onChange={this.handleDropdownChange}>
                <option value="unstarted" selected={this.props.unstarted}>Unstarted</option>
                <option value="inprogress" selected={this.props.inprogress}>InProgress</option>
                <option value="completed" selected={this.props.completed}>Completed</option>
            </select>
        )
    }
}

export default connect()(StatusDropdown);