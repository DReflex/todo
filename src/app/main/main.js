import React from 'react';
import Home from '../home/home';
import Todo from '../todo/todo';
import { Switch, Route } from 'react-router-dom';

class Main extends React.Component{
  render(){
    return(
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/todo' component={Todo} />
        </Switch>
      </main>
    )
  }
}
export default Main
