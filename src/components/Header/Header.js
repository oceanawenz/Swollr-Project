import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';


class Header extends Component {  
    render() {
        return (
        <header className="main-header">
                <NavLink to="/">
                    <img className="main-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png"/>
                </NavLink>
                <ul className="main-links">
                    <li>
                        <NavLink to= '/login'>Login</NavLink>
                    </li>
                </ul>
        </header>
        )
    }   
}
export default Header;