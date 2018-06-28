import React, { Component } from 'react';
import styled from 'styled-components';
const Header = styled.header`
  background-color: #30bdf8;
  height: 20vh;
  padding: 2vh;
  color: white;
`;
const Div = styled.div`
  height: 80px;
  color: white;
  font-size: 4em;
`
const H1 = styled.h1`
  font-size: 1.5em;
`
const P = styled.p`
  font-size: large;
`
class Welcome extends Component {
  render() {
    return (
      <div>
        <Header>
          <Div>TALLWAVE</Div>
          <H1>Welcome to React for Auth!</H1>
        </Header>
        <P>
          To get started, edit <code>src/.js</code> and save to reload.
          <hr />
          Log in to see more
          <a href="http://localhost:4000/auth/google">Please work.</a>
        </P>
      </div>
    )
  }  
}
export default Welcome;