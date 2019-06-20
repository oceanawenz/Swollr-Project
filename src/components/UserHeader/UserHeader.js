import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';



class UserHeader extends Component {  
    render() {
        return (
        <header className="main-header">
                <NavLink to="/">
                    <img className="main-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png"/>
                </NavLink>
                <ul className="main-links">
                    <li>
                        <NavLink to='/builder'>Builder</NavLink>
                        <NavLink to='/myworkouts'>MyWorkouts</NavLink>
                        <NavLink to= '/'>Logout</NavLink>
                    </li>
                </ul>
        </header>
        )
    }   
}
export default UserHeader;