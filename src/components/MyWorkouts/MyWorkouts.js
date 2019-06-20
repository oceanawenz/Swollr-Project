import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { connect} from 'react-redux';
import { saveUser } from '../../dux/reducer';
import { addUserList } from '../../dux/exerciseReducer';
import { addExerciseList } from '../../dux/exerciseReducer';
import './MyWorkouts.scss';

class MyWorkouts extends Component {
    componentDidMount() {
        axios.get(`/api/user`).then(res => {
            this.props.saveUser(res.data);
        })
 }

 componentDidMount() {
    axios.get(`/api/builder`).then(exercises => {
        console.log(exercises);
        this.props.addExerciseList(
            exercises.data)
    })
}

render() {
    const mappedList = this.props.exercises.userlist.map((exercise, index) => {
        const {exercise_name, instructions, sets, reps} = exercise;
            return (
                <div key={index}>
                    <div>{exercise_name}</div>
                    <div>{instructions}</div>
                    <div>Sets: {sets}</div>
                    <div>Reps: {reps}</div>
                </div>                        
            )
        })        
        return (
            <div>
            <h4>MyWorkouts</h4>
        <NavLink to='/builder'>
            <button>
                Add New Workout
            </button>
        </NavLink>
            {mappedList}
        </div>
        )
    }


}

const mapStateToProps = (reduxState) => {
    return reduxState;
}

const mapDispatchToProps = {
    saveUser,
    addExerciseList,
    addUserList
}

const invokedConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default invokedConnect(MyWorkouts)