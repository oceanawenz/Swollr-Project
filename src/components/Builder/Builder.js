import React, {Component} from 'react';
import { connect} from 'react-redux';
import '../Builder/Builder.css'
// import axios from 'axios';








class Builder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exerciseBuilder: [],
            reps: 0,
            sets: 0
        }
    }
    render(){
        console.log(this.props)
        return <div className="builderPage">Build your workout</div>
    }

}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

// const mapDispatchToProps = {
//     saveUser
// }

const invokedConnect = connect(
    mapStateToProps
    // mapDispatchToProps
)

export default invokedConnect(Builder)