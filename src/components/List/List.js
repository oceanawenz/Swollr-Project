import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect} from 'react-redux';
import { saveUser } from '../../dux/reducer';
import { addExerciseList } from '../../dux/exerciseReducer';
import { addUserList } from '../../dux/exerciseReducer';
import { addWorkoutName } from '../../dux/exerciseReducer';
import { removeFromUserList } from '../../dux/exerciseReducer';
import './List.scss';
import axios from 'axios';


class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: [],
            workoutName: ""
        }
        this.postExercise = this.postExcercise.bind(this)
    }



postExcercise(exercise){
    axios.post(`/api/exercise`, {exercise}).then(exercise => {
        // console.log(exercise.data)
       this.props.addExerciseList(exercise.data)
       })
}

deleteExercise(id) {
    axios.delete(`/api/exercises/${id}`, {id}).then(exercise => {
        console.log(exercise.data)
       this.props.removeFromUserList(exercise.data)
    })
}

handleChange(value) {
    this.setState({
        workoutName: value
    })
}

render() {
        const {workoutName} = this.state
        // console.log(this.props)
        console.log(this.props.exercises.userlist);
        const mappedList = this.props.exercises.userlist.map((exercise, index) => {
            const {exercise_id, exercise_name, instructions, sets, reps} = exercise;
                return (
                <div key={index}>
                    <div>{exercise_name}</div>
                    <div>{instructions}</div>
                    <div>Sets: {sets}</div>
                    <div>Reps: {reps}</div>
                    <div>
                        <button onClick={() => this.deleteExercise(index)}>Delete</button>
                    </div>
                </div>                        
            )
        }) 

        return ( <div className="listContainer">
            <h1>List</h1> 
            {/* <label>
                {wokoutName}
            </label>  */}
            {/* <textarea value={workoutName} /> */}
            <input onChange={e => this.handleChange(e.target.value)}
                value={workoutName}
                name="workoutName"
                placeholder="Name Your Workout"
            />
            <div> {mappedList}</div>
            
            <NavLink to='/myworkouts'>
                <button>Save</button>
            </NavLink>
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
    addUserList,
    addWorkoutName,
    removeFromUserList
}

const invokedConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default invokedConnect(List)

