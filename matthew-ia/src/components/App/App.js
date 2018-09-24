import React, { Component } from 'react';
import Nav from '../Nav/Nav'
import Main from '../Main/Main'
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Main />
          <Nav />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
