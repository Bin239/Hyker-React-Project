import React, { Component } from 'react';
import './App.css';
import GoogleApiWrapper from "./Map/Map";
import Navbar from "./Navbar/Navbar";
import AddTrail from "./AddTrail/AddTrail"

//import {BrowserRouter} from "react-router-dom";
//import Route from "react-router-dom/Route"


class App extends Component {





StartPage = (props) => {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn){
    return (
    <div>
      <Navbar/>
      <GoogleApiWrapper/>
      
    </div>
  )
}
  return(
    <h2>Please Log In</h2>
  )
}

  render() {
    return (

      
      <div className="App">

      <this.StartPage isLoggedIn={true}/>
          
        
        
      </div>
      
    )}
}

export default App;
