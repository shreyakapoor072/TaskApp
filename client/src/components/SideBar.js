import React from 'react';
import NavigationButton from './NavigationButton';

const listStyle = {
    listStyleType: 'none'
}

const SideBar = (props) => {

    const navList = props.navItems.map((item)=>{
        return(
            <NavigationButton key={item.id} url={props.url} {...item} />
        )
    })

    return (        
        <ul className="mt-4" style={listStyle}>
            {navList}
        </ul>
    )
}

export default SideBar;