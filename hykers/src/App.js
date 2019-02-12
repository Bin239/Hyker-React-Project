import React, { Component } from 'react';
import './App.css';
import GoogleApiWrapper from "./Map/Map";
import UserInput from "./Userinput/userInput";
import Trails from "./Trails/Trails"
import Navbar from "./Navbar/Navbar"


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Trails/>
        <UserInput/>
        <GoogleApiWrapper/>
      </div>
    )}
}

export default App;
