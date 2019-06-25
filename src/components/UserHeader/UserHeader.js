import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { saveUser } from '../../dux/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import './UserHeader.scss';
import logo from '../../media/swollr-logo.svg';
import styled from 'styled-components';
// import {} from 'react-icons';


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


const mapStateToProps = (reduxState) => {
    return reduxState;
}

const mapDispatchToProps = {
    saveUser
}

const invokedConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)


class UserHeader extends Component {  

logout = () => {
    axios.get('/api/logout').then(res => {
        console.log("user logged out");
        this.props.saveUser(null);
    }).catch(err => {
        console.log("user not logged out", err)
    })
}
    

    render() {
        return (
        <header className="main-header userSide">
                <WrapperLogo>
                    <img className="main-logo" src={logo} alt='main logo'/>
                    <WrapperH4>Sw<WrapperSpan>ollr</WrapperSpan></WrapperH4>
                </WrapperLogo>

                <div  className="pageLinks">
                    <NavLink to='/builder'>Builder</NavLink>
                    <NavLink to='/myworkouts'>MyWorkouts</NavLink>
                </div>

                <NavLink exact to= '/home' className='logoutBtn' onClick={this.logout}>LOGOUT</NavLink>


                {/* <NavLink exact to= '/home'>
                    <div className='logoutBtn' onClick={this.logout}>LOGOUT</div>
                </NavLink> */}

                {/* <ul className="main-links">
                    <li>
                        <NavLink to='/builder'>Builder</NavLink>
                    </li>
                    <li>
                        <NavLink to='/myworkouts'>MyWorkouts</NavLink>
                    </li>
                    <li>
                        <NavLink exact to= '/home'>
                            <div className='logoutBtn' onClick={this.logout}>LOGOUT</div>
                            <button onClick={this.logout}>Logout</button>
                        </NavLink>
                    </li>  
                </ul> */}
        </header>
        )
    }   
}
export default invokedConnect(UserHeader);