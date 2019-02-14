import React, { Component } from 'react';
import './App.css';
import GoogleApiWrapper from "./Map/Map";
//import Trails from "./Trails/Trails"
import Navbar from "./Navbar/Navbar"
//import ChatContainer from './UserChat/ChatContainer';
//import UsernameForm from './UserChat/Username';
//import {BrowserRouter} from "react-router-dom";
//import Route from "react-router-dom/Route"




class App extends Component {
  render() {
    return (

      
      <div className="App">

          <Navbar/>
          <GoogleApiWrapper />
        
        
      </div>
      
    )}
}

export default App;
