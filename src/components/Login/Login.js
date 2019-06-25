import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveUser } from '../../dux/reducer';
import axios from 'axios';
import './Login.scss';



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
            password:  "",
            toggle: false,
            redirect: false
        }
    }
componentDidMount() {
        axios.get('/api/user').then(res => {
            // console.log(res.data);
            this.props.saveUser(res.data)
        })
}

universalChangeHandler = (prop, value) => {
    this.setState({
        [prop]: value
    })
}
    
     
login = () => {
    const {email, password} = this.state
    if(!email || !password) {
        return alert("PLEASE ENTER A EMAIL/PASSWORD")
    }
    axios.post('/api/login', {email, password}).then(res => {
        this.props.saveUser(res.data)
    })
    if(!this.state.redirect){
        this.setState({
            redirect: true
        })
    }else {
        this.setState({
            redirect: false
        })
    }
}


render() {
    console.log(this.state)
    const {email, password, toggle} = this.state;
    if(this.state.redirect){
        return <Redirect to='/myworkouts'/>
    }
    console.log(this.props)
    return <div className="loginForm">
        {toggle ? (
            <div className="bgForm">
                <div className="inputFields">
                    <div className="inputField">
                        Email: {" "}
                        <input
                        onChange={e => 
                        this.universalChangeHandler(e.target.name, e.target.value)
                        }
                        value={email}
                        name="email"
                        />
                    </div>
                    <div className="inputField">
                        Password: {" "}
                        <input
                        onChange={e => 
                        this.universalChangeHandler(e.target.name, e.target.value)
                        }
                        type="password"
                        value={password}
                        name="password"
                        />
                    </div>
                    <div>
                    <button className="formBtn" onClick={this.login}>Login</button>
                    </div>
                    <div className="closeBtn" onClick={() =>this.setState({toggle: false})}>
                                <div className="exitDash"></div>
                                <div className="exitDash"></div>
                            </div>
                </div>
            </div>
        ) : (  
            <button onClick={() => this.setState({toggle: true})}>Login</button>
        )} 
        
    </div>
    }
}


export default invokedConnect(Login)