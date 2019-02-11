import React, { Component } from 'react';
import './App.css';
import GoogleApiWrapper from "./Map/Map"

class App extends Component {
  render() {
    return (
      <div className="App">
      <header>
        <table className ="navbar">
        <head>
          <tr>
            <td>
              <img className = "logo " alt = "Hiker Icon" width = "80" src = "logo1.png"/>
            </td>
          </tr>
          <h2 className = "title">Hyker</h2>
        </head>
        </table>
      </header>
        

      <body>
        <GoogleApiWrapper/>
      </body>
      
        
      
  </div>
    )}
}

export default App;
