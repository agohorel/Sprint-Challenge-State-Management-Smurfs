import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { getSmurfs } from "../actions/getSmurf";

import Smurfs from "../components/Smurfs";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Smurfs></Smurfs>
      </div>
    );
  }
}

export default connect(undefined, { getSmurfs })(App);
