import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class MyWorkouts extends Component {



    render() {
        return <div>
            <h4>MyWorkouts</h4>
        <NavLink to='/builder'>
            <button>
                Add New Workout
            </button>
        </NavLink>
        </div>
    }


}

