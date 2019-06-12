import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { saveUser } from '../../dux/reducer';
import './Header.css';
// import axios from 'axios';


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