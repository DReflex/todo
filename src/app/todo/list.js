import React from 'react'
import { connect } from 'react-redux'
import './coffie.css'
import { createCoffie, resetRedux } from '../../actions/index';
const uuidv4 = require('uuid/v4');



class List extends React.Component {

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
      <div >
        {this.props.coffie.map((data)=>{
          if(data.about === undefined){
            data.about = "No description"
          }
          return(
        <div className="list" key={uuidv4()}>
          <div className="upvote"><h4>123</h4></div>
        <div className="coffie">
          <img src={data.image} alt="" />
          <ul>
            <li><label>Name:</label> {data.name}</li>
            <li><label>Description:</label> {data.about}</li>
            <li><label>Likes:</label> {data.fan_count}</li>
            <li><label>Location:</label> Implement location!</li>
          </ul>

        </div><hr/>
        <div>
          <button>show coments</button>
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
