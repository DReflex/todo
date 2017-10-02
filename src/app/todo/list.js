import React from 'react'
import { connect } from 'react-redux'
import './coffie.css'
import { createCoffie, resetRedux, toggleComments } from '../../actions/index';
const uuidv4 = require('uuid/v4');


class List extends React.Component {

  componentDidMount(){
    this.props.dispatch(resetRedux());
    fetch(`/api/facebook/caffe`).then(res => res.json())
    .then(data => data.map((coffie)=>{
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
  console.log(this.props.coffie)

    }

  render(){
    return(
      <div >
        {this.props.coffie.map((data)=>{
          if(data.about === undefined){
            data.about = "No description"
          }
          return(
        <div className="list" key={uuidv4()}>
          <div className="upvote"><h4>123</h4></div>
        <div className="coffie">
          <img style={{width:'75px'}} src={data.image} alt="" />
          <ul>
            <li><label>Name:</label> {data.name}</li>
            <li><label>Description:</label> {data.about}</li>
            <li><label>Likes:</label> {data.fan_count}</li>
            <li><label>Location:</label> {data.location}</li>
          </ul>

        </div><hr/>
        <div>
          <div>{(data.events != false)?
              <img className="flag" src ='https://t3.ftcdn.net/jpg/01/01/22/88/160_F_101228890_eHPhAjjHC8LeQB2rY0KdwEDm8xdz4CqZ.jpg' alt="no img"/>
              : null}</div>
          <button onClick={()=>this.props.dispatch(toggleComments(data.id))}>show coments</button>
            {data.show_comments ? (<div>{data.comments}</div>):  null}
        </div>
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

List = connect(store)(List)

export default List
