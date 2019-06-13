import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveUser } from '../../dux/reducer';

import axios from 'axios';

// function SignupLink ({signup}) {
//     return <div>
//         <NavLink to="/myworkouts">MyWorkouts</NavLink>
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
            username: "",
            password: "",
            email: ""
        }
    }

universalChangeHandler = (prop, value) => {
    this.setState({
        [prop]: value
    })
}


componentDidMount() {
    axios.get('/api/user').then(res => {
        console.log(res.data)
        this.props.setUser(res.data)
    })
}

register = () => {
    const {username, password, email} = this.state
    console.log("hit")
    axios.post('/api/register', {username, password, email}).then(res => {
        this.setState({ username: " ", password: " "});
        this.props.saveUser(res.data);
        // console.log(res.data)
        console.log("hit")
    }).catch(err => {
        console.log(err, "register not working")
    })
}

    render() {
        const {username, email, password} = this.state;
        console.log(this.state)
        const {user} = this.props; 
        return <div className="signupForm">
            {/* if there is no user/user does not exist */}
            {!user ? (
                <div>
                    <div>
                        username: {" "}
                        <input
                        onChange={e => 
                        this.universalChangeHandler(e.target.name, e.target.value)
                        }
                        value={username}
                        name="username"
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
                    //if there is a user, send them to the login page
                   <div>
                       <p>Already have an account?</p>
                       <li>
                         <button>Login</button>
                       </li>
                      
                   </div>
                 )}
        </div>  
    }
}

export default invokedConnect(Signup)