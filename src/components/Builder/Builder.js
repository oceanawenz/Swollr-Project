import React, {Component} from 'react';
import { connect} from 'react-redux';
import '../Builder/Builder.css'

class Builder extends Component {
    
    render(){
        console.log(this.props)
        return <div className="builderPage">Build your workout</div>
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