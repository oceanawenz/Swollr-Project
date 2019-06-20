import React, {Component} from 'react';
import { connect} from 'react-redux';
import { saveUser } from '../../dux/reducer';
import { addExerciseList } from '../../dux/exerciseReducer';
import { addUserList } from '../../dux/exerciseReducer';
import '../Builder/Builder.scss'
import List from '../List/List';
import axios from 'axios';




class Builder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: []
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
        const mappedExercises = this.props.exercises.allExercises.map(exercise => {
            const {exercise_id, user_id, exercise_name, instructions, sets, reps} = exercise;
            return (
                <div className='exerciseCard' key={exercise_id}>
                    <img className='exerciseImg' /*src={`${exercise.image_url}`}*/ alt=""/>
                    <div className='exInfo'>
                        <h4>{exercise_name}</h4>
                        <p>{instructions}</p>
                    </div>
                    <div>
                        <h5>Sets</h5>
                        <div className='countContainer'>
                            <button className='plusBtn' onClick={()=> this.updateExercise(exercise_id, sets+1, reps)}>+</button>
                            {sets}
                            <button className='minusBtn'onClick={()=> this.updateExercise(exercise_id, sets-1, reps)}>-</button>
                        </div>
                       
                    </div>
                    <div>
                        <h5>Reps</h5>
                        <div className='countContainer'>
                            <button className='plusBtn' onClick={()=> this.updateExercise(exercise_id, sets, reps+1)}>+</button>
                            {reps}
                            <button className='minusBtn'onClick={()=> this.updateExercise(exercise_id, sets, reps-1)}>-</button>
                        </div>
                       
                    </div>
                    <button className='addExBtn' onClick={() => this.addExcercise(exercise_id, exercise_name, instructions, sets, reps)}>(+)</button>
                </div>
            )
        })
    // console.log(mappedExercises)
            return (
            <div className='pageBg'>
                <div className='listContainer'>
                <List/>
                </div>
                
                <div className="exerciseContainer">
                <h3>Exercises</h3>
                    {mappedExercises}
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