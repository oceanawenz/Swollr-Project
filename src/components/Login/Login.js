import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveUser } from '../../dux/reducer';
import axios from 'axios';




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


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password:  ""
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


login = () => {
    const {username, password} = this.state
    axios.post('/api/login', {username, password}).then(res => {
        this.props.saveUser(res.data)
    }).catch(err => {
        console.log(err)
    })
}


render() {
    const {username, password} = this.state;
    // const {user} = this.props; 
    return <div>
            <div>
                <div>
                    username: {" "}
                    <input
                    onChange={e => 
                    this.universalChangeHandler(e.target.name, e.target.value)
                    }
                    value={username}
                    name="username"
                    placeholder="Enter you username"
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
                    placeholder="Enter your password"
                    />
                </div>
                <div>
                    <NavLink to="/builder">
                        <button onClick={this.login}>Login</button>
                    </NavLink>
                    
                </div>
            </div>
    </div>
    }
}


export default invokedConnect(Login)