/**
 * Home Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import { Helmet } from "react-helmet";
import MessageButton from "../Message/MessageButton";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>matthew.ia > info</title>
        </Helmet>
        <div id="info">
          <h1>matthew.ia</h1>
          <h2>designer + programmer</h2>
          <p>
            I’m Matthew Alicea, a multidisciplinary designer with a B.S. in Computer Science from Appalachian State University. I create digital interfaces and user experiences, graphic designs, and print designs.
          </p>
        </div>
        <MessageButton />
      </div>

    );
  }
}

export default Home;