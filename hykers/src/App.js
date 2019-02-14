import React, { Component } from 'react';
import './App.css';
import GoogleApiWrapper from "./Map/Map";
import Navbar from "./Navbar/Navbar";
import {Link} from "react-router-dom";
import AddTrail from "./AddTrail/AddTrail";
import { runInThisContext } from 'vm';

//import {BrowserRouter} from "react-router-dom";
//import Route from "react-router-dom/Route"


class App extends Component {
constructor(){
  super();

  this.state = {
    trails : [],
    showModal : false
  }
}

addTrail = async (trailToBeAdded, e) => {
  e.preventDefault ();

  try {
    const response = await fetch ("http://localhost:9000/api/v1/trails", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(trailToBeAdded),
      headers: {
        "Content-Type" : "application/json"
      }
    });
    if(!response.ok){
      throw Error (response.statusText);
    }

    const parsedAddTrail = await response.json();

    this.setState(
      {movies : [...this.state.trails, parsedAddTrail.data]})
  }
  catch (err) {
    console.log(err)
  }

}


StartPage = (props) => {
  const isLoggedIn = props.isLoggedIn;
//dummy login, which is set to true as default for now.
  if (isLoggedIn){
    return (
    <div>

      <Navbar/>
      <GoogleApiWrapper/>
      
      <h2>Add New Trail</h2>
      
    </div>
  )
}
  return(
    <div><Navbar/>
    <h2>Please Log In</h2>
      </div>
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
