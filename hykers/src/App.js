import React, { Component } from 'react';
import './App.css';
import GoogleApiWrapper from "./Map/Map";
import Navbar from "./Navbar/Navbar"
import Login from "./Login/Login"
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
    return <Login/>
}

  render() {
    return (

      
      <div className="App">

      <this.StartPage isLoggedIn={true}/>
          
        
        
      </div>
      
    )}
}

export default App;
