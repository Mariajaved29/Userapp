import React from 'react';
import Cards from './Component/Cards';
import {Route, Switch } from 'react-router-dom';
import './App.css';


function App() {
  return (
  <div>
      <Switch>
        <Route exact path='/' component={Cards}/>
        </Switch>
        </div>
  )
}

export default App

