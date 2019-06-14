import React, { Component } from 'react';




class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            listName: "",
            
        }
    }
    render() {
        return <div className="listContainer">
            <h1>List</h1>   
            <input type="text" placeholder="Enter Your Workout Name"/>
            <button>Save</button>
            <button>Delete/Reset</button>
        </div>
    }
}

export default List