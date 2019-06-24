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
const WrapperBtn = styled.div`
    width: 30px;
    height: 30px;
    font-size: 20px;
    color: #3aa17e;
`;

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
        this.updateExercise = this.updateExercise.bind(this);
        this.addExcercise = this.addExcercise.bind(this);
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


updateExercise(id, sets, reps) {
    axios.put(`/api/builder/${id}`, {sets, reps}).then(exercise => {
        console.log(exercise.data)
       this.props.addExerciseList(exercise.data)
    }) 
}

    render(){
        console.log(this.props);
        const {toggle} = this.state;
        const mappedExercises = this.props.exercises.allExercises.map(exercise => {
            const {exercise_id, exercise_name, instructions, sets, reps} = exercise;
            console.log(exercise.image_url)
            return ( 
                <div className='exerciseCard' key={exercise_id}>
                    <img className='exerciseImg' src={`${exercise.image_url}`} alt=""/>
                    <div className='exInfo'>
                        <h4>{exercise_name}</h4>
                        {/* <p className>{instructions}</p> */}
                        {/* <ToggleInput type='checkbox' value='selected'></ToggleInput>
                        <ToggleLabel for="toggle-input">Description</ToggleLabel>
                        <ToggleContent>
                            <p>{instructions}</p>
                        </ToggleContent> */}


                        {/* <input className='toggle-input' type='checkbox' value='selected'></input> */}
                        {/* <label className='toggle-label' for="toggle-input">Description</label> */}
                        <p>{instructions}</p>
                        
                        
                        {/* {toggle ? (
                            <div>
                                <button key={exercise_id} onClick={() => this.setState({toggle: false})}>Signup</button>
                            </div>
                        ) : (
                            <div>
                                
                                <button key={exercise_id} onClick={() => this.setState({toggle: true})}>Signup</button>
                            </div>
                        )} */}
                        
                    </div>
                    <Wrapper>
                        <WrapperHead>Sets</WrapperHead>
                        <div className='countContainer'>
                            <WrapperBtn  onClick={()=> this.updateExercise(exercise_id, sets-1, reps)}><FaMinusCircle/></WrapperBtn>
                            <WrapperSpan>{sets}</WrapperSpan>
                            <WrapperBtn  onClick={()=> this.updateExercise(exercise_id, sets+1, reps)}><FaPlusCircle/></WrapperBtn> 
                        </div>
                       
                    </Wrapper>
                    <Wrapper>
                        <WrapperHead>Reps</WrapperHead>
                        <div className='countContainer'>
                            <WrapperBtn  onClick={()=> this.updateExercise(exercise_id, sets, reps-1)}><FaMinusCircle/></WrapperBtn>
                            <WrapperSpan>{reps}</WrapperSpan>
                            <WrapperBtn  onClick={()=> this.updateExercise(exercise_id, sets, reps+1)}><FaPlusCircle/></WrapperBtn>
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