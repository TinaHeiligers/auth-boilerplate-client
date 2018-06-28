import React, { Component } from 'react';
import styled from 'styled-components';

// TODO convert to styled components
const AppMainDiv = styled.div`
  text-align: center;
`;
const AppHeader = styled.header`
  background-color: #30bdf8;
  height: 150px;
  padding: 20px;
  color: white;
`;
const AppDiv = styled.div`
  height: 80px;
  color: white;
  font-size: 4em;
`
const AppH1 = styled.h1`
  font-size: 1.5em;
`
const AppP = styled.p`
  font-size: large;
`
class App extends Component {
  render() {
    return (
      <AppMainDiv>
        <AppHeader>
          <AppDiv>TALLWAVE</AppDiv>
          <AppH1>Welcome to React for Auth!</AppH1>
        </AppHeader>
        <AppP>
          To get started, edit <code>src/App.js</code> and save to reload.
        </AppP>
      </AppMainDiv>
    );
  }
}

export default App;
