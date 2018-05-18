/**
 * ProjectList Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import { Helmet } from "react-helmet";

import FloatingList from "./FloatingList";
import ProjectFrame from "./ProjectFrame";

const plist = require("../../projectlist.json");

class ProjectList extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    /**
    const projects = {
      number1: 1,
      number2: 2
    };
     */

    /**
     * Generate array of ProjectFrames for the ProjectCarousel
     *
    let projectFrames = plist.map((project) => {
        return <ProjectFrame project={project} />;
     });
     */

    // console.log(projectFrames);

    return (
      <div id="projects">
        <Helmet>
          <title>matthew.ia > projects</title>
        </Helmet>
        <h1>matthew.ia</h1>
        <FloatingList projects={plist}/>
      </div>
    );
  }
}

export default ProjectList;