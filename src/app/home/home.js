import React from 'react'
import { connect } from 'react-redux'
import './home.css'
import { addTodo } from '../../actions/index'
import  Todo  from '../todo/todo'
const uuidv4 = require('uuid/v4');
//weather api key a4df27ba08a0807dfef73c5a316f5712

class Home extends React.Component {
  constructor(){
    super();
    this.Fetch = this.Fetch.bind(this)
  }

   Fetch =() =>{
     fetch('http://api.openweathermap.org/data/2.5/forecast?q=Zenica&APPID=a4df27ba08a0807dfef73c5a316f5712').then(res => res.json())
     .then((data) => {
       const newData = {
         city: data.city,
         list: data.list.slice(0,4)
       }
       console.log(newData)
       this.props.dispatch(addTodo(newData))
     })


  }

  render(){
    console.log(this.props.todos)
    return (
      <div>
        <div className="box">
          </div>
        <div className="box1">
        <div className="lists">
            {this.props.todos.list.map((data) =>{
              const time = data.dt_txt.split(' ').slice(1)
              const temp = (data.main.temp - 273.15).toFixed(2)
              const src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
      return  <ul className="single" key={uuidv4()}>
                <li key={uuidv4()}>{time}</li>
                <li key={uuidv4()}>{temp}<span>&#8451;</span></li>
                <li key={uuidv4()}><img src={src} alt="" className="img img-responsive" /></li>

              </ul>
            }

          )}

          </div>
          <button onClick={this.Fetch} >Update</button>
          </div>
            <Todo />
      </div>
    )
  }
}

const store = (store) =>{
  return {
    todos: store.todos
  }
}

Home = connect(store)(Home)

export default Home
