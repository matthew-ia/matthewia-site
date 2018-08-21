/**
 * ProjectDetail Component
 *
 * Wrapper for a project's Detail view. Includes defining which project content should
 * be displayed, as well as managing static elements like the Floating List component.
 *
 * @extends Component
 */

import React, {Component} from "react";
import { Helmet } from "react-helmet";
import { Redirect} from "react-router-dom";

import Detail from "./Detail";
import FloatingList from "../ProjectList/FloatingList";

// Project detail Components
import Spectra from "./projects/Spectra/Spectra";
import OS1 from "./projects/OS1/OS1";


import { padNum } from "../../tools";

const data = require("../../projectlist.json");
const plist = data.plist;

class DetailWrapper extends Component {

  constructor(props) {
    super(props);

    // Generate names and links for jump table for FloatingList
    let projectLinks = [];  // Holds elements of projects with their proper detail page links
    let pid = ""; // Temporary variable to hold each object's id for the link location
    let p = { }; // Temporary object for the the elements of projectLinks
    Object.keys(this.props.projects).forEach(function(key) { // Iterates over project list to define the above vars
      pid = key.substr(1);
      p = {
        name: props.projects[key].name,
        loc: '/projects/' + pid
      };
      projectLinks.push(p);
    });

    let path = this.props.location.pathname;
    let id = path.substr((path.lastIndexOf('/')+1), path.length);
    //let name = projects.id.name;
    //let tags = projects.id.tags;
    //let content = projects.id.content;
    let images = this.props.projects["p"+id].images;

    this.state = {
      currentPath: this.props.location.pathname,
      projectId: id,
      plistJumpTable: projectLinks,
      projectInfo: this.props.projects["p"+id], // sets project info obj from json data
      publicPath: window.location.origin + '/images/p' + id + "/"
    };
  }

  render() {
    // Updates the page if a jump table link was clicked
    if (this.props.location.pathname !== this.state.currentPath) {
      let path = this.props.location.pathname;
      let id = path.substr((path.lastIndexOf('/')+1), path.length);
      return <Redirect to={'/projects/' + id} />
    }

    let projectData = {
      id: padNum(this.state.projectId),
      info: this.state.projectInfo, // name, tags
      publicPath: this.state.publicPath,
    };
    return (
      <main id="detail">
        <Helmet>
          <title>matthew.ia > projects > {projectData.id}</title>
        </Helmet>
        <div id="p-id">
          <span>{projectData.id}</span>
          <span id="p-name">{projectData.info.name}</span>
        </div>
        {(() => {
          switch(projectData.id) {
            case '1':
              return <Spectra p={projectData}/>;
            case '2':
              return <OS1 p={projectData}/>;
            default:
              return <Spectra p={projectData}/>;
          }
        })()}
        <FloatingList plist={this.state.plistJumpTable} currentProjectPath={this.props.location.pathname}/>
      </main>
    );
  }
}

DetailWrapper.defaultProps = {
  projects: plist // project list set using the json data; doesn't change state
};

export default DetailWrapper;