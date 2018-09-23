/**
 * Resume Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";

import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'

class Resume extends Component {
  render() {
    return (
      <div id="resume">
        <Helmet>
          <title>matthew.ia > projects</title>
        </Helmet>
        <h1><Link to='/info'>matthew.ia</Link></h1>
        <div id="resume-content">
          <div className="r-item">
            <h2>Work Experience</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;