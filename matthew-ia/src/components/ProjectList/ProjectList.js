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

const data = require("../../projectlist.json");
const plist = data.plist;

class ProjectList extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);

    let counter = 0;
    Object.keys(plist).forEach(function() {
      counter++;
    });
    console.log(counter);
    this.state = {
      count: counter
    };
  }
  // eslint-disable-next-line require-jsdoc
  componentDidMount() {
    let width = ((this.state.count * (650 + 64)) + 100);
    console.log("" + width);
    document.getElementById('projects').style.width = "" + width + "px";
  }

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

    console.log(plist);

    return (
      <div>
        <div id="projects">
          <Helmet>
            <title>matthew.ia > projects</title>
          </Helmet>
          <h1>matthew.ia</h1>
          <FloatingList projects={plist}/>
        </div>
      </div>
    );
  }
}

export default ProjectList;