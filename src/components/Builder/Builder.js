import React, {Component} from 'react';
import { connect} from 'react-redux';
// import { saveUser } from '../../dux/reducer';
import '../Builder/Builder.css'
import List from '../List/List';
import axios from 'axios';




class Builder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exercises: [],
            reps: 0,
            sets: 0
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.updateExercise = this.updateExercise.bind(this)
        this.add = this.add.bind(this)
        this.addToReps = this.addToReps.bind(this)
        this.subtract = this.subtract.bind(this)
        this.subtractReps = this.subtractReps.bind(this)
    }


add() {
    this.setState({
        sets: this.state.sets + 1
    }) 
}

subtract() {
    if(this.state.sets > 0) {
        this.setState(prevState => ({sets: prevState.sets - 1}))
    }
}

subtractReps() {
    if(this.state.reps > 0) {
        this.setState(prevState => ({reps: prevState.reps - 1}))
    }
}

addToReps() {
    this.setState({
        reps: this.state.reps + 1
    }) 
}




componentDidMount() {
    axios.get(`/api/exercises`).then(exercises => {
        this.setState({
            exercises: exercises.data
        })
    })
}

updateExercise(id, sets, reps) {
    axios.put(`/api/exercise/${id}`, {sets, reps}).then(exercise => {
        this.setState({
            exercises : exercise.data
        })
    })
}

    render(){
        const mappedExercises = this.state.exercises.map(exercise => {
            return (
                <div key={exercise.exercise_id}>
                    <div>{exercise.exercise_name}</div>
                    {/* <div>{exercise.img_url}</div> */}
                    <div>{exercise.instructions}</div>
                    <div>{exercise.sets}</div>
                    <div>{exercise.reps}</div>

                    {/* <div>
                        <button onClick={this.add}>+</button>
                        <div>{exercise.sets}</div>
                        <button onClick={this.subtract}>-</button>
                    </div>
                    <div>
                        <button onClick={this.addToReps}>+</button>
                        <div>{exercise.reps}</div>
                        <button onClick={this.subtractReps}>-</button>
                    </div> */}
                    
                </div>
            )
        })
            return <div className='excerciseContainer'>
            <h3>Exercises</h3>
                {mappedExercises}
                <button>Add to list</button> 
                    <div>
                        <h1>Sets {this.state.sets}</h1>
                        <button onClick={this.add}>+</button>
                        <button onClick={this.subtract}>-</button>
                    </div>
                    <div>
                        <h1>Reps {this.state.reps}</h1>
                        <button onClick={this.addToReps}>+</button>
                        <button onClick={this.subtractReps}>-</button>
                    </div>
                
                <div>
                <List/>
                </div>
            </div>
            
        
    }

}




const mapStateToProps = (reduxState) => {
    return reduxState;
}

// const mapDispatchToProps = {
//     saveUser
// }

const invokedConnect = connect(
    mapStateToProps
    // mapDispatchToProps
)

export default invokedConnect(Builder)