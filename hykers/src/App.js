import React, { Component } from 'react';
import './App.css';
import GoogleApiWrapper from "./Map/Map";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";
import { runInThisContext } from 'vm';

//import {BrowserRouter} from "react-router-dom";
//import Route from "react-router-dom/Route"


class App extends Component {


  StartPage = (props) => {
    const isLoggedIn = props.isLoggedIn;
    //dummy login, which is set to true as default for now.
    if (isLoggedIn) {
      return (
        <div>
          <Navbar />
          <GoogleApiWrapper />
        </div>
      )
    }
    return (
      <div><Navbar />
        <h2>Please Log In</h2>
      </div>
    )
  }

  render() {
    return (


      <div className="App">

        <this.StartPage isLoggedIn={true} />


      </div>

    )
  }
}

export default App;
