import React, { Component } from 'react';
import Home from './components/Home/Home';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Builder from './components/Builder/Builder';
import MyWorkouts from './components/MyWorkouts/MyWorkouts';
import { Switch, Route} from 'react-router-dom';
import './sass/main.scss';
import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="App">        
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/login'component={Login}/>
          <Route path='/builder' component={Builder}/>
          <Route path='/myworkouts' component={MyWorkouts}/>
  
          <Route
          path='*'
          render={() => {
            return <div>Oops! Something went wrong</div>
          }}
          />
  
        </Switch>
      </div>
    );
  }
}

