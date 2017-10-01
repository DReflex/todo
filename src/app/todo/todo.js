import React from 'react'
import Navbar from './navbar'
import List from './list'

let exact = Number
class Todo extends React.Component {

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
    exact = document.getElementById("todo-navbar").offsetTop
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(){
    var testDiv = document.getElementById("todo-navbar");
    var height = window.scrollY

    if(testDiv.offsetTop < height){
      testDiv.className = "navbar navbar-default navbar-fixed-top"
    }
    //exact height is setup once in componentDidMount
    if(height < exact){
      testDiv.className = "navbar navbar-default"

    }
  }
    render(){
    return(
      <div>
        <Navbar />
        <List />
      </div>
    )
  }
}


export default Todo
