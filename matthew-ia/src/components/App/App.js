import React, { Component } from 'react';
import Nav from '../Nav/Nav'
import Main from '../Main/Main'

class App extends Component {
  render() {
    return (
      <div>
        <div id="dimensions" />
        <Main />
        <Nav />
      </div>
    );
  }
}

export default App;
