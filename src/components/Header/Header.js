import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    render() {
        return (
        <header className="main-header">
            <div>
                <h1>Swoll</h1>
                <ul>
                    <li>
                        <NavLink to= '/login'>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to='/signup'>Signup</NavLink>
                    </li>
                </ul>
            </div> 
        </header>
        )
    }
    
}


export default Header;