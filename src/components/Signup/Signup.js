import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveUser } from '../../dux/reducer';

import axios from 'axios';

// function SignupLink ({signup}) {
//     return <div>
//         <NavLink to="/builder">MyWorkouts</NavLink>
//         <button onClick={signup}>Signup</button>
//     </div>
// }

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



class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: "",
            password: "",
            email: ""
        }
    }

universalChangeHandler = (prop, value) => {
    this.setState({
        [prop]: value
    })
}



register = () => {
    const {user_name, password, email} = this.state
    console.log("hit")
    axios.post('/api/register', {user_name, password, email}).then(res => {
        // this.setState({ user_name: " ", password: " "});
        this.props.saveUser(res.data);
        // console.log("recieved", res.data)
        // console.log("hit")
    }).catch(err => {
        console.log(err, "register not working")
    })
}

    render() {
        const {user_name, email, password} = this.state;
        console.log(this.state)
        const {user} = this.props; 
        return <div className="signupForm">
            {/* if there is no user/user does not exist */}
            {!user ? (
                <div className="inputFields">
                    <div>
                        username: {" "}
                        <input
                        onChange={e => 
                        this.universalChangeHandler(e.target.name, e.target.value)
                        }
                        value={user_name}
                        name="user_name"
                        placeholder="Enter a username"
                        />
                    </div>
                    <div>
                        email: {" "}
                        <input
                        onChange={e => 
                        this.universalChangeHandler(e.target.name, e.target.value)
                        }
                        value={email}
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        password: {" "}
                        <input
                        onChange={e => 
                        this.universalChangeHandler(e.target.name, e.target.value)
                        }
                        type="password"
                        value={password}
                        name="password"
                        placeholder="Enter a password"
                        />
                    </div>
                    <div>
                        <NavLink to="/builder">
                        <button onClick={this.register}>Signup</button>
                        </NavLink>
                        
                    </div>
                </div>
                ) : (
                  <p>Please Sign In!</p>
                 )}
        </div>  
    }
}

export default invokedConnect(Signup)