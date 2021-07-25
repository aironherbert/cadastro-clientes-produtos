import React, { Component } from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import 'fontsource-roboto'
import Routes from './routes'

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Routes/>  
      </Container>
    );
  }
}

export default App;
