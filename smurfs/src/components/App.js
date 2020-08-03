import React, { Component } from "react";
import "./App.css";
import Smurfs from './Smurfs';
import SmurfsForm from './SmurfsForm';


class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="smurf">
        <h1>Smurfs!</h1>
        <Smurfs />
      </div>
      <div className="form">
        <h2>Add Smurf</h2>
        <SmurfsForm />
      </div>
      </div>
    );
  }
}

export default App;
