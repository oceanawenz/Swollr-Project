import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect} from 'react-redux';
import { saveUser } from '../../dux/reducer';
import { addExerciseList } from '../../dux/exerciseReducer';
import { addUserList } from '../../dux/exerciseReducer';
import './List.scss';
import axios from 'axios';


class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: [],
            listName: ""
        }
        this.postExercise = this.postExcercise.bind(this)
    }



postExcercise(exercise){
    axios.post(`/api/exercise`, {exercise}).then(exercise => {
        console.log(exercise.data)
       this.props.addExerciseList(exercise.data)
       })
}


handleChange(e) {
    this.setState({
        listName: e.target.value
    })
}

render() {
        console.log(this.props.exercises.userlist);
        const mappedList = this.props.exercises.userlist.map((exercise, index) => {
            const {exercise_id, exercise_name, instructions, sets, reps} = exercise;
                return (
                <div key={index}>
                    <div>{exercise_name}</div>
                    <div>{instructions}</div>
                    <div>Sets: {sets}</div>
                    <div>Reps: {reps}</div>
                </div>                        
            )
        }) 

        return ( <div className="listContainer">
            <h1>List</h1>
            {/* <div>{mappedList}</div>   
            <label>
                {listName}
            </label> */}
            <input type="text" 
            value={this.state.listName} onChange={this.handleChange}
            placeholder="Enter Workout Name"
            />
            {mappedList}

            <NavLink to='/myworkouts'>
                <button>Save</button>
            </NavLink>
            <button>Delete/Reset</button>
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

export default invokedConnect(List)

