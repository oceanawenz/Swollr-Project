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
            email: "",
            password:  ""
        }
    }


universalChangeHandler = (prop, value) => {
    this.setState({
        [prop]: value
    })
}
    
     
login = () => {
    const {email, password} = this.state
    axios.post('/api/login', {email, password}).then(res => {
        this.props.saveUser(res.data)
    }).catch(err => {
        console.log(err)
    })
}


render() {
    const {email, password} = this.state;
    console.log(this.props)
    return <div>
            <div>
                <div>
                    email: {" "}
                    <input
                    onChange={e => 
                    this.universalChangeHandler(e.target.name, e.target.value)
                    }
                    value={email}
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
                    placeholder="Enter your password"
                    />
                </div>
                <div>
                    <NavLink to="/myworkouts">
                        <button onClick={this.login}>Login</button>
                    </NavLink>
                    
                </div>
            </div>
    </div>
    }
}


export default invokedConnect(Login)