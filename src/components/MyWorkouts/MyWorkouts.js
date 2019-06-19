import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { connect} from 'react-redux';
import { saveUser } from '../../dux/reducer';
import { addExerciseList } from '../../dux/exerciseReducer';
import './MyWorkouts.scss';

class MyWorkouts extends Component {
    componentDidMount() {
        axios.get(`/api/user`).then(res => {
            this.props.saveUser(res.data);
        })
 }


    render() {
        console.log(this.props)
        return <div>
            <h4>MyWorkouts</h4>
        <NavLink to='/builder'>
            <button>
                Add New Workout
            </button>
        </NavLink>
        </div>
    }


}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

const mapDispatchToProps = {
    saveUser,
    addExerciseList
}

const invokedConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default invokedConnect(MyWorkouts)