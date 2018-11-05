import React from 'react';
import {Link} from 'react-router-dom';
 
const NavigationButton = (props) => {
    return(
        <li><Link style={{textDecoration: "none"}} className="d-block text-white p-2 bg-info mt-2 mb-4" to={`${props.url}/${props.path}`}>{props.name}</Link></li>
    )
}

export default NavigationButton;