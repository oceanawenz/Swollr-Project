import React, {Component} from 'react';
import { connect} from 'react-redux';
import { saveUser } from '../../dux/reducer';
import { addExerciseList } from '../../dux/exerciseReducer';
import '../Builder/Builder.scss'
import List from '../List/List';
import axios from 'axios';




class Builder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: [],
            // list: [],
            reps: 0,
            sets: 0
        }
        this.updateExercise = this.updateExercise.bind(this);
    
       
    }

addToExercises =(item)  => {
    const {exercises} = this.state;
    var copy = [...exercises]
    copy.push(item)
    this.setState({
        exercises: copy
    })
}


// componentWillMount() {
//     axios.get(`/api/exercises`).then(exercises => {
//         console.log(exercises);
//         this.setState({
//             exercises: exercises.data
//         })
//     })
// }

updateExercise(id, sets, reps) {
    axios.put(`/api/exercises/${id}`, {sets, reps}).then(exercise => {
        // console.log(exercise.data)
        this.setState({
            exercises : exercise.data
        }) 
    }) 
}



    render(){
        console.log(this.props);
        console.log(this.state);
        const mappedExercises = this.props.exercises.allExercises.map(exercise => {
            const {exercise_id, exercise_name, instructions, sets, reps} = exercise;
            return (
                <div key={exercise_id}>
                    <div>{exercise_name}</div>
                    <img src={`${exercise.image_url}`} alt=""/>
                    <div>{instructions}</div>
                    <div>
                        <h4>Sets {sets}</h4>
                        <button onClick={()=> this.updateExercise(exercise_id, sets+1, reps)}>+</button>
                        <button onClick={()=> this.updateExercise(exercise_id, sets-1, reps)}>-</button>
                    </div>
                    <div>
                        <h4>Reps {reps}</h4>
                        <button onClick={()=> this.updateExercise(exercise_id, sets, reps+1)}>+</button>
                        <button onClick={()=> this.updateExercise(exercise_id, sets, reps-1)}>-</button>
                    </div>
                    <div>
                    <button onClick={() => this.addToExercises({exercise_id, exercise_name, instructions, sets, reps})}>Add to list</button>
                    </div>
                </div>
            )
        })
    // console.log(mappedExercises)
            return (
            <div className='excerciseContainer'>
            <h3>Exercises</h3>
            
            {mappedExercises}
            <div>
                <List/>
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
    addExerciseList
}

const invokedConnect = connect(
    mapStateToProps,
    mapDispatchToProps
)

export default invokedConnect(Builder)





                   
 // <div> */}
//     {/* <button>+</button> */}
//     {/* <div>{exercise.reps}</div> */}
//     {/* <button>-</button> */}
    // {/* </div> */} 

// add() {
//     this.setState({
//         sets: this.state.sets + 1
//     }) 
// }

// subtract() {
//     if(this.state.sets === 0) {
//         this.setState({
//             sets: 0
//         })
//     } else {
//         this.setState({
//             sets: this.state.sets - 1
//         })
//     }
// }

// addToReps() {
//     this.setState({
//         reps: this.state.reps + 1
//     }) 
// }

// subtractReps() {
//     if(this.state.reps === 0) {
//         this.setState({
//             sets: 0
//         })
//     } else {
//         this.setState({
//             sets: this.state.reps - 1
//         })
//     }
// }