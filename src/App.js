import React , {component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import MapView from './Map';
import Restaurants from './Restaurants'

class App extends React.Component{
render(){
  return (
    <div>
    <MapView/>
    </div>
  );
}
}


export default App;