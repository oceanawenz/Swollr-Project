import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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
    axios.get('/auth/user').then(res => {
        this.props.setUser(res.data)
    })
}

register = () => {
    const {username, password, email} = this.state
    axios.post("/auth/register", {username, password, email}).then(res => {
        this.props.saveUser(res.data);
    })
}

    render() {
        const {username, email, password} = this.state;
        const {user} = this.props; 
        return <header>
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
                        />
                    </div>
                    <div>
                        password: {" "}
                        <input
                        onchange={e => 
                        this.universalChangeHandler(e.target.name, e.target.value)
                        }
                        type="password"
                        value={password}
                        name="password"
                        />
                    </div>
                </div>
            )



            }
            <nav>
            <Link to="/myworkouts"><button>Sign Up</button></Link>
            </nav>
           </header>
       
    }


}

export default invokedConnect(Signup)