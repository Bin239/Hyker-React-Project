import React, { Component } from 'react';
import './App.css';
import GoogleApiWrapper from "./Map/Map";
import Search from "./Search/search";
import Trails from "./Trails/Trails"
import Navbar from "./Navbar/Navbar"
import ChatContainer from './UserChat/ChatContainer';
import UsernameForm from './UserChat/Username';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Search/>
        <GoogleApiWrapper/>
        <ChatContainer/>
        <Trails/>
        <UsernameForm/>
      </div>
    )}
}

export default App;
