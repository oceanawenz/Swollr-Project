import React from 'react';
import './SideBarToggle.scss';

function SideBarToggle(props) {
    return ( <button className="toggle-button">
        <div className="toggle-line"/>
        <div className="toggle-line"/>
        <div className="toggle-line"/>
    </button>
    )

}

export default SideBarToggle;