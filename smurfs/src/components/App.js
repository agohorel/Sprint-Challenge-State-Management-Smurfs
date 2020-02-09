import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
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
      <Body className="App">
        <Form></Form>
        <Smurfs></Smurfs>
      </Body>
    );
  }
}

export default connect(undefined, { getSmurfs })(App);

const Body = styled.div`
  background-image: linear-gradient(to bottom right, #03c2fc, #09449c);
  min-height: 100vh;
`;
