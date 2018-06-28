import React, { Component } from 'react';
import styled from 'styled-components';
// These styled items can be moved to another folder, extended and shared.
const HelpMainDiv = styled.div`
  text-align: center;
  font-family: Tahoma;
  font-size: large;
`;
const HelpHeader = styled.header`
  background-color: #30bdf8;
  height: 20vh;
  padding: 2vh;
  color: white;
`;
const HelpDiv = styled.div`
  height: 80px;
  color: white;
  font-size: 4em;
`
const HelpH1 = styled.h1`
  font-size: 1.5em;
`
const HelpP = styled.p`
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

class Help extends Component {
  render() {
    return (
      <HelpMainDiv>
        <HelpHeader>
          <HelpDiv>HELP</HelpDiv>
        </HelpHeader>
        <HelpP>
          To add help, edit <code>src/Help.js</code> and save to reload.
        </HelpP>
      </HelpMainDiv>
    );
  }
}

export default Help;
