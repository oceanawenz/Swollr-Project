import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveUser } from '../../dux/reducer';
import './Signup.scss';
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';



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
            email: "", 
            toggle: false,
            redirect: false
        }
    }

universalChangeHandler = (prop, value) => {
    this.setState({
        [prop]: value
    })
}

componentDidMount() {
    axios.get('/api/user').then(res => {
        // console.log(res.data);
        this.props.saveUser(res.data)
    })
}

register = () => {
    const {user_name, password, email} = this.state
    console.log("hit")
    if(!user_name || !password || !email) {
        return alert("Please fill values")
    }
    axios.post('/api/register', {user_name, password, email}).then(res => {
        this.props.saveUser(res.data);
        toast.success("Successful")
        // console.log("recieved", res.data)
        // console.log("hit")
        if(!this.state.redirect){
            this.setState({
                redirect: true
            })
        }else {
            this.setState({
                redirect: false
            })
        } 
    }).catch(err => {
        console.log(err, "register not working")
    })
}



    render() {
        const {user_name, email, password, toggle} = this.state;
        console.log(this.state)
        if(this.state.redirect){
            return <Redirect to='/myworkouts'/>
        }
        return <div className="signupForm">
            {/* if there is no user/user does not exist */}
            {toggle ? (
                <div className="bgForm">
                    <div className="inputFields">
                        <div className="inputField">
                            Username: {" "}
                            <input
                            onChange={e => 
                            this.universalChangeHandler(e.target.name, e.target.value)
                            }
                            value={user_name}
                            name="user_name"
                            // placeholder="Enter a username"
                            />
                        </div>
                        <div className="inputField">
                            Email: {" "}
                            <input
                            onChange={e => 
                            this.universalChangeHandler(e.target.name, e.target.value)
                            }
                            value={email}
                            type="email"
                            name="email"
                            // placeholder="Enter your email"
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
                            // placeholder="Enter a password"
                            />
                        </div>
                        <div>
                            <button className="onWhite" onClick={this.register}>Signup</button>
                            {/* <button className="closeBtn" onClick={() =>this.setState({toggle: false})}>X</button>   */}
                            <div className="closeBtn" onClick={() =>this.setState({toggle: false})}>
                                <div className="exitDash"></div>
                                <div className="exitDash"></div>
                            </div>
                        </div>
                    </div>
                </div>
                ) : (
                  <button onClick={() => this.setState({toggle: true})}>Signup</button>
                 
                 )}
                 {/* <div>
                     <ToastContainer/>
                 </div> */}
        </div>
      
    }
}

export default invokedConnect(Signup)