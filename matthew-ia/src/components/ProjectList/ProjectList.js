/**
 * ProjectList Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet";

class ProjectList extends Component {
  render() {
    const p = {
      number1: 1,
      number2: 2
    };
    return (
      <div id="projects">
        <Helmet>
          <title>matthew.ia > projects</title>
        </Helmet>
        <h1>matthew.ia</h1>
        <li><Link to='/projects/1'>{ p.number1 }</Link></li>
        <li><Link to='/projects/2'>{ p.number2 }</Link></li>
      </div>
    );
  }
}

export default ProjectList;