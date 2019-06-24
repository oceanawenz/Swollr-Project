import React, {Component} from 'react';
import UserHeader from '../UserHeader/UserHeader';
import {NavLink} from 'react-router-dom';
import { connect} from 'react-redux';
import { saveUser } from '../../dux/reducer';
import { addUserList } from '../../dux/exerciseReducer';
import { addExerciseList } from '../../dux/exerciseReducer';
import './MyWorkouts.scss';
import styled from 'styled-components';
import axios from 'axios';



// Create a WrapperSpan component that'll render a <span> tag with some styles
const WrapperSpan = styled.span`
    color: #00537e;
`;

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
    // const {workoutName} = this.props
    const mappedList = this.props.exercises.userlist.map((exercise, index) => {
        const {exercise_name, instructions, image_url, sets, reps} = exercise;
            return (
                <div className='workoutCard' key={index}>
                    <img className='workoutImg' src={`${exercise.image_url}`} alt=""/>
                    <div className='workoutInfo'>
                        <h4>{exercise_name}</h4>
                        <p>{instructions}</p>
                    </div>
                    <h4 className='workoutCount'>Sets: <WrapperSpan>{sets}</WrapperSpan></h4>
                    <h4 className='workoutCount'>Reps: <WrapperSpan>{reps}</WrapperSpan></h4>
                </div>                        
            )
        })        
        return (
        <div>
            <UserHeader/>
            <div className='pageBg2'>
                <h3>My Workouts</h3>
                <NavLink to='/builder'>
                    <button>Add New Workout</button>
                </NavLink>
                <div>
                    <button>Text to me</button>
                </div>
                {mappedList}
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