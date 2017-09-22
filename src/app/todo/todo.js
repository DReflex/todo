import React from 'react'
import { Link } from 'react-router-dom'



class Todo extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <h1>This is Todo</h1>
        <button > <Link to='/'>Home</Link></button>
      </div>
    )
  }
}

export default Todo
