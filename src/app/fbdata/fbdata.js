import React from 'react';
var graph = require('fbgraph');
class FBData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      query: "",
      url: "",
      type:""
    };
    this.facebook = this.facebook.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.googleSubmit = this.googleSubmit.bind(this);
    this.google = this.google.bind(this);
    this.facebookChange = this.facebookChange.bind(this)
    this.submitFace = this.submitFace.bind(this)
  }
componentDidMount(){
  //setup facebook sdk
  graph.setVersion("2.10");
  graph.setAccessToken('354675081620273|z7nbfLm1qb3HANjVpiho63pH618');
  //make arr of strings for dataOglavina namještajL1zsw

// https://maps.googleapis.com/maps/api/place/textsearch/json?query=coffie+in+Zenica&key=AIzaSyAyBlS9Dg0LbOHV8ykJXiI6Qgv3ZDL1zsw
  //get google places from map api
//https://maps.googleapis.com/maps/api/place/textsearch/json?query=[your search key word]&location=latitude,longitude&radius=value&key=[your API key]&next_page_token=next_page_token value

}
submitFace = (type) => {
  this.state.name.map((data) =>{
    graph.get(`search?type=page&q=${data} zenica`, function (err,res){
      if(res.data[0] !== undefined){
        console.log(res.data[0].id, type)
      }
    })
  })
}
 facebook = (type) =>{
   //using facebook api to search get and post data
   this.state.name.map((data) => {
     graph.get(`search?type=page&q=${data} zenica`, function (err,res){
       if(res.data[0] !== undefined){
         graph.get(`${res.data[0].id}?fields=id,name,picture,about,fan_count,location`,function(err, res){
           //check the data
           const data ={
             name:res.name,
             image: res.picture.data.url,
             id: res.id,
             fan_count:res.fan_count,
             about:res.about,
             location: res.location,
             type: type,
             comments: [{}],
             events:[{}]
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
                     about:res.about,
                     location: res.location,
                     type: type,
                     comments: [{}],
                     events:[{}]

                   }),
                   headers: {
                       'Content-Type': 'application/json'
                   }
               })

             })
       }

     })
   })
 }
 handleChange(event) {
    this.setState({query: event.target.value});

  }
  facebookChange(event) {
     this.setState({type: event.target.value});
   }
  google =(token) =>{
    fetch(`${this.state.url}&pagetoken=${token}`,{mode:'CORS'})
    .then(res => res.json())
    .then((data) => {
      data.results.map(res => this.state.name.push(res.name))
      console.log(this.state.name)
      if(data.next_page_token !== undefined){
        let token= data.next_page_token;
      return(setTimeout(()=>this.google(token), 1500))
      }
      else{
        return (console.log("no more tokens"))
      }
    })
  }

  googleSubmit(event) {
    //google submit
    this.setState({query: "",name:[]});

    event.preventDefault();
    let url = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=${this.state.query}&location=44.20169,17.90397&radius=10000&key=AIzaSyAyBlS9Dg0LbOHV8ykJXiI6Qgv3ZDL1zsw`
    this.setState({url:url})
    fetch(url,{
      mode: 'CORS'
    })
    .then(res => res.json())
    //recursion 15 s
    .then((data) => {
      if(data.next_page_token !== undefined){
        let token= data.next_page_token
        setTimeout(()=>this.google(token), 10000)
      }
      data.results.map(res => this.state.name.push(res.name))
      return console.log(this.state.name);
    })
    .catch(err => console.log(err))
  }
  render(){
    return(
      <div>
        <h1>Database development mode</h1>
        <p>Use this only in development later redoit for better usage</p>
          <form onSubmit={this.googleSubmit}>
          <label>
            google search:
            <input type="text" value={this.state.query} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      {/* bug free click*/}

        <label>
          facebook type:
          <input type="text" value={this.state.type} onChange={this.facebookChange} />
          <button onClick={()=>this.facebook(this.state.type)}>submitFacebook</button>
      </label>


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
