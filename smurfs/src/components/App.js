import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

import { getSmurfs } from "../actions/getSmurf";

import Smurfs from "../components/Smurfs";
import Form from "../components/Form";

class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <Form></Form>
        <Smurfs></Smurfs>
      </div>
    );
  }
}

export default connect(undefined, { getSmurfs })(App);
