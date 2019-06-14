import React, {Component} from 'react';
import { connect} from 'react-redux';
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
    }


componentDidMount() {
        axios.get(`/api/exercises`).then(exercises => {
            this.setState({
                exercises: exercises.data
            })
        })
}






    render(){
        const {sets} = this.state
        const mappedExercises = this.state.exercises.map(exercise => {
            return (
                <div key={exercise.exercise_id}>
                    <div>{exercise.exercise_name}</div>
                    {/* <div>{exercise.img_url}</div> */}
                    <div>{exercise.instructions}</div>
                    <div>{exercise.sets}</div>
                    <div>{exercise.reps}</div>
                </div>
            )
        })
            return <div className='excerciseContainer'>
            <h3>Exercises</h3>
                {mappedExercises}
                <button>Add to list</button> 
                <div>
                    {sets}
                    <input type="button" value="-" datafield="quantity"/>
                    <input type="numbers" step="1" max="" value="1"/>
                    <input type="button" value="+" datafield="quantity" />
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