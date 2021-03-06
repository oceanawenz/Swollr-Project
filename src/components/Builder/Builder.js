import React, {Component} from 'react';
import UserHeader from '../UserHeader/UserHeader';
import { connect} from 'react-redux';
import { saveUser } from '../../dux/reducer';
import { addExerciseList } from '../../dux/exerciseReducer';
import { addUserList } from '../../dux/exerciseReducer';
import {FaPlusCircle, FaMinusCircle, FaPlus} from 'react-icons/fa'
import '../Builder/Builder.scss'
import styled from 'styled-components';
import List from '../List/List';
import axios from 'axios';


// Create a Wrapper component that'll render a <div> tag with some styles
const Wrapper = styled.div`
    text-align: center;

`;

// Create a Wrapper component that'll render a <span> tag with some styles
const WrapperHead = styled.span`
    margin-bottom: 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 24px;
`;

// Create a WrapperBtn component that'll render a <div> tag with some styles
// const WrapperBtn = styled.div`
//     font-size: 20px;
//     color: #3aa17e;
// `;

// Create a Wrapper component that'll render a <span> tag with some styles
const WrapperSpan = styled.span`
    text-align: center;
    margin: 0 10px;
    font-size: 20px;
    font-weight: 600;
`;


// // Setup toggle styles
// const ToggleInput = styled.input`
//     display: none;
// `;
// const ToggleLabel = styled.label`
//     display: block:
//     cursor: pointer;
//     &:hover
//         background-color: #345123;
//     &:after
//         content:"+"

// `;
// const ToggleContent = styled.div`
//     max-height: 0;
//     overflow: hidden;
//     +transition(.3s ease max-height)
// `;






class Builder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: [],
            toggle: false
        }
        this.addExcercise = this.addExcercise.bind(this);
        this.addToExcercise = this.addToExcercise.bind(this)
        this.subtractToExcercise = this.subtractToExcercise.bind(this)
    }




componentDidMount() {
        axios.get(`/api/user`).then(res => {
            this.props.saveUser(res.data);
        })
 }


componentDidMount() {
    axios.get(`/api/builder`).then(exercises => {
        console.log(exercises);
        this.setState({
            exercises: exercises.data
        })
    })
}


// addToExercises =(item)  => {
// //     console.log(this.props)
//     this.props.addUserList(item)
// }

addExcercise(exercise_id, exercise_name, img_url, instructions, sets, reps ){
    const {user_id} = this.props.user.user
    console.log('exercise info', exercise_id, user_id, exercise_name, img_url, instructions, sets, reps)
    axios.post(`/api/builder/${user_id}`, {exercise_id, exercise_name, img_url, instructions, sets, reps}).then(res => {
        console.log(res.data)
       this.props.addUserList(res.data)
       })
}


addToExcercise(id, sets, reps) {
    axios.put(`/api/builder/${id}`, {sets, reps}).then(exercise => {
        console.log(exercise.data)
       this.props.addExerciseList(exercise.data)
    }) 
}

subtractToExcercise(id, sets, reps) {
    if(sets === 0){
        return 
    }
    if(reps === 0) {
        return
    }
    axios.put(`/api/builder/${id}`, {sets, reps}).then(exercise => {
        console.log(exercise.data)
       this.props.addExerciseList(exercise.data)
    }) 
}

    render(){
        console.log(this.props);
        // const {toggle} = this.state;
        const mappedExercises = this.props.exercises.allExercises.map(exercise => {
            const {exercise_id, exercise_name, instructions, sets, reps} = exercise;
            console.log(exercise.image_url)
            return ( 
                <div className='exerciseCard' key={exercise_id}>
                    <img className='exerciseImg' src={`${exercise.image_url}`} alt=""/>
                    <div className='exInfo'>
                        <h4>{exercise_name}</h4>
                        <p>{instructions}</p>
                    </div>
                    <Wrapper>
                        <WrapperHead className='inline padPush'>Sets</WrapperHead>
                        <div className='countContainer inline'>
                            <div className='WrapperBtn'  onClick={()=> this.subtractToExcercise(exercise_id, sets-1, reps)}><FaMinusCircle/></div>
                            <WrapperSpan className='padPush2'>{sets}</WrapperSpan>
                            <div className='WrapperBtn'  onClick={()=> this.addToExcercise(exercise_id, sets+1, reps)}><FaPlusCircle/></div> 
                        </div>
                       
                    </Wrapper>
                    <Wrapper>
                        <WrapperHead className='inline padPush'>Reps</WrapperHead>
                        <div className='countContainer inline'>
                            <div className='WrapperBtn' onClick={()=> this.subtractToExcercise(exercise_id, sets, reps-1)}><FaMinusCircle/></div>
                            <WrapperSpan className='padPush2'>{reps}</WrapperSpan>
                            <div className='WrapperBtn'  onClick={()=> this.addToExcercise(exercise_id, sets, reps+1)}><FaPlusCircle/></div>
                        </div>
                       
                    </Wrapper>

                    <div className='addExBtn' onClick={() => this.addExcercise(exercise_id, exercise_name, instructions, sets, reps)}><FaPlus/></div>
                </div>
            )
        })
    // console.log(mappedExercises)
            return ( 
            <div>
                <UserHeader/>
                <div className='pageBg'>
                    <div>
                        <h3>List</h3> 
                        <List/>
                    </div>
                    <div className="exerciseContainer">
                        <h3>Exercises</h3>
                        {mappedExercises}
                    </div>            
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

export default invokedConnect(Builder)