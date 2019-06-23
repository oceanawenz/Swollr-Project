import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { saveUser } from '../../dux/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import './UserHeader.scss';
// import {} from 'react-icons';



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
        <header className="main-header">
                    <img className="main-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/800px-Logo_NIKE.svg.png"/>
               
                <ul className="main-links">
                    <li>
                        <NavLink to='/builder'>Builder</NavLink>
                        <NavLink to='/myworkouts'>MyWorkouts</NavLink>
                        <NavLink exact to= '/home'>
                            <div onClick={this.logout}>LOGOUT</div>
                            {/* <button onClick={this.logout}>Logout</button> */}
                        </NavLink>
                    </li>
                </ul>
        </header>
        )
    }   
}
export default invokedConnect(UserHeader);