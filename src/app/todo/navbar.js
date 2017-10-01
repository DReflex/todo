import React from 'react';
import './navbar.css'
import { connect } from 'react-redux'
import { resetRedux } from '../../actions/index';

const color = {color:'white'}
class Navbar extends React.Component{
  constructor(){
    super();

    this.onClick = this.onClick.bind(this)
    this.scrollToTop = this.scrollToTop.bind(this)
  }
  onClick = () =>{
    this.props.dispatch(resetRedux());
    console.log('deleted')
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
                  <li onClick={this.onClick}><a >Bars and Pubs</a></li>
                  <li><a >Hotels</a></li>
                  <li ><a >Restaurants</a></li>
                  <li ><a >Sports</a></li>
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
