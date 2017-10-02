import React from 'react';
import './navbar.css'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createCoffie, resetRedux } from '../../actions/index';

const color = {color:'white'}
class Navbar extends React.Component{
  constructor(){
    super();

    this.onClick = this.onClick.bind(this)
    this.scrollToTop = this.scrollToTop.bind(this)
  }
  onClick = (query) =>{
    this.props.dispatch(resetRedux());
    fetch(`/api/facebook/${query}`).then(res => res.json())
    .then(data => data.map((coffie) =>{
      let newLocation
      if(coffie.location !== undefined){
         newLocation = `${coffie.location.street}, ${coffie.location.city}`
      }else{
         newLocation = "no location"
      }
      const newData = {
        name:coffie.name,
        id:coffie.id,
        image:coffie.image,
        about:coffie.about,
        fan_count:coffie.fan_count,
        events: coffie.events,
        comments: coffie.comments,
        location: newLocation

      }
      return this.props.dispatch(createCoffie(newData))

    })
  )
  let exact = document.getElementById("todo-navbar").offsetTop
  setTimeout(()=>window.scrollTo(0, exact), 1000)

  }
  scrollToTop = () =>{
    window.scrollTo(0, 0);

  }
  render(){
    return(
      <nav className="navbar navbar-default" id="todo-navbar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#todoNavbar">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="todoNavbar">
            <ul className="nav navbar-nav navbar-right">
              <li className="dropdown">
                <a style={color} className="dropdown-toggle" data-toggle="dropdown">Categories
                <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li onClick={()=> this.onClick('caffe')}><a>bars and pubs</a></li>
                  <li onClick={()=> this.onClick('hotels')}><a >Hotels</a></li>
                  <li onClick={()=> this.onClick('restaurants')} ><a >Restaurants</a></li>
                  <li onClick={()=> this.onClick('sports')}><a >Sports</a></li>
                  <li onClick={()=> this.onClick('shops')}><a >Shops</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a style={color} className="dropdown-toggle" data-toggle="dropdown">Sort by
                <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a >Likes</a></li>
                  <li><a >Upvotes</a></li>
                </ul>
              </li>
              <li onClick={this.scrollToTop}> <a style={{color:"white"}}>On Top</a></li>
          </ul>
          </div>
        </div>
      </nav>
    )
  }
}
const store = (store) =>{
  return {
    coffie: store.coffieZenica
  }
}

Navbar = connect(store)(Navbar)
export default Navbar
