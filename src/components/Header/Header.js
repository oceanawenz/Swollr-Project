import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../media/swollr-logo.svg';
import styled from 'styled-components';
import './Header.scss';
import Login from '../Login/Login';


// Create a WrappedLogo component that'll render a <NavLink> tag with some styles
const WrapperLogo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    align-content: stretch;
`;

// Create a WrappedH4 component that'll render a <h4> tag with some styles
const WrapperH4 = styled.h4`
    color: white;
    margin-top: 0;
    margin-left: 15px;
    text-transform: none;
    letter-spacing: 2px;
    @media only screen and (min-width: 960px) {
        margin-top: 20px;
    }    
`;

// Create a WrappedSpan component that'll render a <span> tag with some styles
const WrapperSpan = styled.span`
    letter-spacing: 1px;
`;


class Header extends Component {  
    render() {
        return (
        <header className="main-header">
                <WrapperLogo to="/">
                    <img className="main-logo" src={logo}/>
                    <WrapperH4>Sw<WrapperSpan>ollr</WrapperSpan></WrapperH4>
                    
                </WrapperLogo>
                <div>
                    <Login/>
                </div>
        </header>
        )
    }   
}
export default Header;