import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect} from 'react-redux';
import { saveUser } from '../../dux/reducer';
import { addExerciseList } from '../../dux/exerciseReducer';
import { addUserList } from '../../dux/exerciseReducer';
import { addWorkoutName } from '../../dux/exerciseReducer';
import { removeFromUserList } from '../../dux/exerciseReducer';
import {FaTrashAlt} from 'react-icons/fa'
import './List.scss';
import axios from 'axios';


class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            list: [],
            workoutName: ""
        }
    }

componentDidMount() {
    axios.get(`/api/user`).then(res => {
        this.props.saveUser(res.data);
    })
}


deleteUserExercise(exercise_id) {
    const {user_id} = this.props.user.user
    axios.delete(`/api/builder/${exercise_id}/${user_id}`).then(res => {
        console.log(res.data)
       this.props.removeFromUserList(res.data)
    })
}


handleChange(value) {
    this.setState({
        workoutName: value
    })
}

render() {
        const {workoutName} = this.state
        // console.log(this.props.user.user)
        console.log(this.props.exercises.userlist);
        // const {user_id} = this.props.user.user
        const mappedList = this.props.exercises.userlist.map((exercise, index) => {
            const {exercise_id, exercise_name, sets, reps} = exercise;
                return (
                <div className='itemBox' key={index}>
                    <h5>{exercise_name}</h5>
                    {/* <div>{instructions}</div> */}
                    <div className="counter">
                        <p>Sets: {sets}</p>
                        <p>Reps: {reps}</p>
                    </div>
                    <div className="delete" onClick={() => this.deleteUserExercise(exercise_id)}><FaTrashAlt/></div>
                </div>                        
            )
        }) 

        return ( <div className="listContainer">
           
            <div> {mappedList}</div>
            {/* <input onChange={e => this.handleChange(e.target.value)}
                value={workoutName}
                name="workoutName"
                placeholder="Name Your Workout"
            /> */}
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