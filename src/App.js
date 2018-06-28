import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';
import { push, replace } from 'redux-little-router';
import { ImmutableFragment } from 'redux-little-router/es/immutable';
import Welcome from './Welcome';
import Help from './Help';
import Counter from './Counter';

// These styled items can be moved to another folder, extended and shared.
const AppDiv = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
  font-family: Tahoma;
  font-size: large;
`;

class App extends Component {
  componentDidMount() {
    this.props.replace({ pathname: '/welcome' });
  }
  render() {
    return (
      <AppDiv>
        <ImmutableFragment forRoute='/welcome'>
          <Welcome />
        </ImmutableFragment>
        <ImmutableFragment forRoute='/help'>
          <Help />
        </ImmutableFragment>
        <ImmutableFragment forRoute='/counter'>
          <Counter />
        </ImmutableFragment>
      </AppDiv>
    );
  }
}

export default connect(null, { replace })(App);

