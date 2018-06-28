import React, { Component } from 'react';
import styled from 'styled-components';

// These styled items can be moved to another folder, extended and shared.
const AppMainDiv = styled.div`
  text-align: center;
  font-family: Tahoma;
  font-size: large;
`;
const AppHeader = styled.header`
  background-color: #30bdf8;
  height: 20vh;
  padding: 2vh;
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
const LoginButton = styled.button`
  display: block;
  border-color: black;
  width: 14vw;
  height: 5vh;
  text-align: center;
  margin: 2vh auto 2vh;
  border-radius: 10px;
`

class App extends Component {
  login = (e) => {
    e.preventDefault();
    console.log(`Login Button Clicked! (e):`, e)
  }
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
        <div>
          Log in to see more
          <LoginButton type='LoginButton' onClick={this.login}>Log In</LoginButton>
        </div>
      </AppMainDiv>
    );
  }
}

export default App;
