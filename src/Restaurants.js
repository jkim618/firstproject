import React , {component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import App from "./App.js"
import MapView from './Map.js'

const API_KEY = process.env.REACT_APP_API_KEY;

class Restaurants extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rest_names: [],
      lats: [],
      lngs: []
    }
  }

  componentDidMount(){
    let url = 'https://cors-anywhere-hclaunch.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.028507,-78.510606&radius=3300&type=restaurant&opennow=True&key=' + API_KEY;
    axios.get(url).then(response=>{
    console.log(response);
    const data2 = response.data.results
    const data3 = response.data.results.map((x)=>x.geometry).map((y)=>y.location).map((z)=>z.lat)
    const data4 = response.data.results.map((x)=>x.geometry).map((y)=>y.location).map((z)=>z.lng)
    this.setState({rest_names:data2, 
                lats:data3,
                lngs:data4})
  });
}
render(){
  return (
    <div class="list">
        <h1> Best Restaurants </h1>
      <ul>
          {this.state.rest_names.map(x => (
            <li key={x.id}> 
            <li id="restname">{x.name}</li>  
            <li id="rating">Rating: {x.rating}</li>
            <li id="price">Price Level: {x.price_level}</li><br></br></li>
          ))}
          {/* <MapView lats={this.state.lats}/> */}
        </ul>
    </div>
  );
}
}


export default Restaurants;
