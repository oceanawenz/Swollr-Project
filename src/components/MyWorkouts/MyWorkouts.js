import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class MyWorkouts extends Component {



    render() {
        return <div>
            <h1>MyWorkouts</h1>
        <NavLink to='/builder'>
            <button>
                Add New Workout
            </button>
        </NavLink>
        </div>
    }


}

