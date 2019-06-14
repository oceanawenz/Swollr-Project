import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';


// function MainLinks({logout}) {
//     return <div>
//         <NavLink exact to='/'>Home</NavLink>
//         <NavLink to='/builder'>Builder</NavLink>
//         <NavLink to='/myworkouts'>MyWorkouts</NavLink>
//         <button onClick={logout}>Logout</button>
//     </div>
// }

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
            {/* <MainLinks logout={this.logout}/> */}
        </header>
        )
    }
    
}


export default Header;