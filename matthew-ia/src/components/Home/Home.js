/**
 * Home Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import MessageButton from "../Message/MessageButton";

class Home extends Component {
  render() {
    return (
      <div>
        <div id="info">
          <h1>matthew.ia</h1>
          <h2>designer + programmer</h2>
          <p>
            I’m Matthew Alicea, a multidisciplinary designer studying Computer Science at Appalachian State University.
            I create digital interfaces, graphic designs, and print designs.
          </p>
        </div>
        <MessageButton />
      </div>

    );
  }
}

export default Home;