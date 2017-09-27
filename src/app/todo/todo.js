import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './coffie.css'
import { createCoffie, resetRedux } from '../../actions/index'
const uuidv4 = require('uuid/v4');



class Todo extends React.Component {

  componentDidMount(){
    this.props.dispatch(resetRedux())
    fetch('/api/facebook').then(res => res.json())
    .then(data => data.map((coffie) =>{
      const newData = {
        name:coffie.name,
        id:coffie.id,
        image:coffie.image,
        about:coffie.about,
        fan_count:coffie.fan_count
      }
      return this.props.dispatch(createCoffie(newData))

    })
  )
    }
  render(){
    return(
      <div>
        <h1>This is Todo</h1>
        <button > <Link to='/'>Home</Link></button><hr/>
        {this.props.coffie.map((data)=>{
          if(data.about === undefined){
            data.about = "No description"
          }
          return(
        <div key={uuidv4()}>
        <div className="coffie">
          <ul>
            <li><label>Name:</label> {data.name}</li>
            <li><label>Description:</label> {data.about}</li>
            <li><label>Likes:</label> {data.fan_count}</li>
          </ul>
          <img src={data.image} alt="" />

        </div>
        <div className = "line"></div>
        </div>
      )
      }
    )}
      </div>
    )
  }
}
const store = (store) =>{
  return {
    coffie: store.coffieZenica
  }
}

Todo = connect(store)(Todo)

export default Todo
