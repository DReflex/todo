import React from 'react';
import Home from '../home/home';
import Todo from '../todo/todo';
import FBData from '../fbdata/fbdata'
import { Switch, Route } from 'react-router-dom';

class Main extends React.Component{
  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/todo' component={Todo} />
          <Route path='/fbdata' component ={FBData} />
        </Switch>
      </main>
    )
  }
}
export default Main
