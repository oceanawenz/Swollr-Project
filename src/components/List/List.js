import React, { Component } from 'react';




class List extends Component{
    constructor(props){
        super(props)
        this.state = {
            listName: ""
        }
    }

handleChange(e) {
    this.setState({
        listName: e.target.value
    })
}

    render() {
        const{listName} = this.state
        return <div className="listContainer">
            <h1>List</h1>   
            <label>
                {listName}
            </label>
            <input type="text" 
            value={this.state.listName} onChange={this.handleChange}
            placeholder="Enter Workout Name"
            />
            <button>Save</button>
            <button>Delete/Reset</button>
        </div>
    }
}

export default List