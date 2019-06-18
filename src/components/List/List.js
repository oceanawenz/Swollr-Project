import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect} from 'react-redux';
import { saveUser } from '../../dux/reducer';
import { addExerciseList } from '../../dux/exerciseReducer';
import './List.scss';
import axios from 'axios';


class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            listName: ""
        }
        this.postExercise = this.postExcercise.bind(this)
    }

postExcercise(exercise){
    axios.post(`/api/exercise`, {exercise}).then(exercise => {
        console.log(exercise.data)
       this.setState({
            exercise: exercise.data
       })
    })
}


handleChange(e) {
    this.setState({
        listName: e.target.value
    })
}

    render() {
        console.log(this.props);
        const {listName} = this.state
        // const mappedList = list.map()
        return <div className="listContainer">
            <h1>List</h1>   
            <label>
                {listName}
            </label>
            <input type="text" 
            value={this.state.listName} onChange={this.handleChange}
            placeholder="Enter Workout Name"
            />
            {/* {mappedList} */}

            <NavLink to='/myworkouts'>
                <button>Save</button>
            </NavLink>
            <button>Delete/Reset</button>
        </div>
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

export default invokedConnect(List)

