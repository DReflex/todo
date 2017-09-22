import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './home.css'
import { addTodo } from '../../actions/index'
const uuidv4 = require('uuid/v4');
//weather api key a4df27ba08a0807dfef73c5a316f5712
/*

     const data = {
       name: "name",
       city: {id: "hello", name: "this is name"},
       list:[{dt:1111},{dt:2222},{dt:3333},{dt:4444},{dt:5555},{dt:6666},{dt:7777},{dt:8888}]
     }
     const newData = {
       city: data.city,
       list: data.list.slice(0, 4)
     };
     console.log(newData)
     this.props.dispatch(addTodo(newData))

*/
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
        <div className="box1"><h1 className="city">{this.props.todos.city.name}</h1>
        <div className="lists">
            {this.props.todos.list.map((data) =>{
              const time = data.dt_txt.split(' ').slice(1)
              const temp = (data.main.temp - 273.15).toFixed(2)
              const src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`
      return  <ul className="single" key={uuidv4()}>
                <li key={uuidv4()}>{time}</li>
                <li key={uuidv4()}>{temp}<span>&#8451;</span></li>
                <li key={uuidv4()}>{data.weather[0].description}</li>
                <li key={uuidv4()}><img src={src} className="img img-responsive" /></li>

              </ul>
            }

          )}
          </div>
          </div>

        </div>
        <button onClick={this.Fetch}>FetchData</button>
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
