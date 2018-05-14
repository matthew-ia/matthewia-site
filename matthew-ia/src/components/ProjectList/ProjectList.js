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

import FloatingList from "FloatingList";
import ProjectFrame from "ProjectFrame";

class ProjectList extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    const projects = {
      number1: 1,
      number2: 2
    };
    return (
      <div id="projects">
        <Helmet>
          <title>matthew.ia > projects</title>
        </Helmet>
        <h1>matthew.ia</h1>
        <FloatingList projects={projects}/>
        <ProjectFrame projects={projects}/>
      </div>
    );
  }
}

export default ProjectList;