import React from 'react';
var graph = require('fbgraph');
class FBData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: []};
    this.facebook = this.facebook.bind(this)
  }
componentDidMount(){
  //setup facebook sdk
  graph.setVersion("2.10");
  graph.setAccessToken('354675081620273|z7nbfLm1qb3HANjVpiho63pH618');
  //make arr of strings for data

  //facebook search, get, post request
 //key
 // AIzaSyAyBlS9Dg0LbOHV8ykJXiI6Qgv3ZDL1zsw

// https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffie+in+Zenica&key=AIzaSyAyBlS9Dg0LbOHV8ykJXiI6Qgv3ZDL1zsw
  //get google places from map api
  fetch('https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffie+in+Zenica&key=AIzaSyAyBlS9Dg0LbOHV8ykJXiI6Qgv3ZDL1zsw',{
    mode: 'CORS'
  })
  .then(res => res.json())
  .then(data => data.results.map((res) =>{
    this.state.name.push(res.name)
    console.log(this.state.name)
  })
  )
  .catch(err => console.log(err))

}

 facebook = () =>{
   //using facebook api to search get and post data
   this.state.name.map((data) => {
     graph.get(`search?type=page&q=${data} zenica`, function (err,res){
       graph.get(`${res.data[0].id}?fields=id,name,picture,about,fan_count`,function(err, res){
         //check the data
         const data ={
           name:res.name,
           image: res.picture.data.url,
           id: res.id,
           fan_count:res.fan_count,
           about:res.about
           //add loaction field = location
         }
         console.log(data)
         //post the data
         fetch('/api/facebook', {
                 method: 'POST',
                 mode: 'CORS',
                 body: JSON.stringify({
                   name:res.name,
                   image: res.picture.data.url,
                   id: res.id,
                   fan_count:res.fan_count,
                   about:res.about

                 }),
                 headers: {
                     'Content-Type': 'application/json'
                 }
             })

           })
     })
   })
 }
  render(){
    return(
      <div><h1>Create facebook database</h1>
      //bug free click
      <button onClick={this.facebook} >test one</button>
      </div>
    )

  }
}

export default FBData;
/*
//get req for search
graph.get("search?type=page&q=Carpe Diem Zenica", function(err, res) {
  //get request for page with all the fields
graph.get(`${res.data[0].id}`, function(err, res){
  console.log(res)
})
});
*/
