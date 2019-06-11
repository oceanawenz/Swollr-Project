import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/'/>
        <Route path='/builder'/>
        <Route path='myworkouts'/>

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

export default App;
