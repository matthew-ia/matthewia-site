import React, { Component } from 'react';
import logo from '../../logo.svg';
import Nav from '../Nav/Nav'

class App extends Component {
  render() {
    return (
      <div>
        <div id="info">
          <h1>matthew.ia</h1>
          <h2>designer + programmer</h2>
          <p>I’m Matthew Alicea, a multidisciplinary designer studying Computer Science at Appalachian State University. I create digital interfaces, graphic designs, and print designs.</p>
        </div>
        <Nav />
      </div>
    );
  }
}

export default App;
