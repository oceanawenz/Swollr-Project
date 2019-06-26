import React, {Component} from 'react';
import UserHeader from '../UserHeader/UserHeader';
import {NavLink} from 'react-router-dom';
import { connect} from 'react-redux';
import { saveUser } from '../../dux/reducer';
import { addUserList } from '../../dux/exerciseReducer';
import { addExerciseList } from '../../dux/exerciseReducer';
import {FaPlus} from 'react-icons/fa'
import './MyWorkouts.scss';
import styled from 'styled-components';
import axios from 'axios';



// Create a WrapperSpan component that'll render a <span> tag with some styles
const WrapperSpan = styled.span`
    color: #00537e;
`;

const WrapperH3 = styled.h3`
    padding-right: 50px;
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

// componentDidMount() {
//     axios.get(`/api/builder`).then(exercises => {
//         console.log(exercises);
//         this.setState({
//             exercises: exercises.data
//         })
//     })
// }

render() {
    // const {workoutName} = this.props
    console.log(this.props)
    const mappedList = this.props.exercises.userlist.map((exercise, index) => {
        const {exercise_name, instructions, image_url, sets, reps} = exercise;
            return (
                <div className='workoutCard' key={index}>
                    <img className='workoutImg' src={`${image_url}`} alt=""/>
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
                <WrapperH3>My Workouts</WrapperH3>
                <NavLink to='/builder'>
                    <div className='addWorkoutBtn'><FaPlus/></div>
                </NavLink>
                {/* <div>
                    <button>Text to me</button>
                </div> */}<br></br>
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