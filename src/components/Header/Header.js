import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { saveUser } from '../../dux/reducer';
import './Header.scss';
// import axios from 'axios';


// function MainLinks({logout}) {
//     return <div>
//         <NavLink exact to='/'>Home</NavLink>
//         <NavLink to='/builder'>Builder</NavLink>
//         <NavLink to='/myworkouts'>MyWorkouts</NavLink>
//         <button onClick={logout}>Logout</button>
//     </div>
// }



// const mapStateToProps = (reduxState) => {
//     return reduxState;
// }

// const mapDispatchToProps = {
//     saveUser
// }

// const invokedConnect = connect(
//     mapStateToProps,
//     mapDispatchToProps
// )

class Header extends Component {

// logout = () => {
//     axios.get('/api/logout').then((res) => {
//         this.props.setUser(null);
//     })
// }

// universalChangeHandler = (prop, value) => {
//     this.setState({
//         [prop]: value
//     })
// }      
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
            {/* <MainLinks logout={this.logout}/> */}
        </header>
        )
    }
    
}


export default Header;