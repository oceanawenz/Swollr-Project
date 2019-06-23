import React, {Component} from 'react';
import UserHeader from '../UserHeader/UserHeader';
import {NavLink} from 'react-router-dom';
import { connect} from 'react-redux';
import { saveUser } from '../../dux/reducer';
import { addUserList } from '../../dux/exerciseReducer';
import { addExerciseList } from '../../dux/exerciseReducer';
import './MyWorkouts.scss';
import axios from 'axios';



class MyWorkouts extends Component {
    constructor() {
        super()
        this.state = {
            text: {
                recipient: '',
                textmessage: ''
            } 
        }
    }       
    
    

// sendText = () => {
//     const {text} = this.state
// }


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
        const {exercise_name, instructions, image_url, sets, reps} = exercise;
            return (
                <div key={index}>
                    <div>{exercise_name}</div>
                    <img className='exerciseImg' src={`${exercise.image_url}`} alt=""/>
                    <div>{instructions}</div>
                    <div>Sets: {sets}</div>
                    <div>Reps: {reps}</div>
                    
                </div>                        
            )
        })        
        return (
        <div>
            <div>
                <UserHeader/>
            </div>
            <h4>MyWorkouts</h4>
                <NavLink to='/builder'>
                    <button>Add New Workout</button>
                </NavLink>
            {mappedList}
            <div>
                <button>Text to me</button>
            </div>
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