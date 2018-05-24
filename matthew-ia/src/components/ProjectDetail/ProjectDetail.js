/**
 * ProjectDetail Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import { Helmet } from "react-helmet";
import { Redirect} from "react-router-dom";

import Content from "./Content";
import FloatingList from "../ProjectList/FloatingList";


import { padNum } from "../../tools";

const data = require("../../projectlist.json");
const plist = data.plist;

class ProjectDetail extends Component {

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
      projectInfo: this.props.projects["p"+id],
      publicPath: window.location.origin + '/images/p' + id + "/"
    };
  }

  render() {
    // Updates the page if a jump table link was clicked
    if (this.props.location.pathname !== this.state.currentPath) {
      let path = this.props.location.pathname;
      let id = path.substr((path.lastIndexOf('/')+1), path.length);
      return <Redirect to={'/projects/' + id } />
    }

    const pid = padNum(this.state.projectId);
    let pnum = "p" + this.state.projectId;
    const p = plist[pnum];
    console.log(this.state.projectId);
    console.log(this.state.projectInfo);
    let pInfo = [this.state.projectInfo, this.state.publicPath];
    return (
      <div>
        <div id="detail">
          <Helmet>
            <title>matthew.ia > projects > { pid }</title>
          </Helmet>
          <FloatingList plist={ this.state.plistJumpTable } currentProjectPath={ this.props.location.pathname }/>
          <div id="p-id">{ pid }</div>
          <div className="container-fluid content">
            <div className="row">
              <div className="col-md-4 rpad-20">
                <h1 className="p-title">{ p.name }</h1>
                <span className="p-tags">{ p.tags.join(" // ") }</span>
                <p className="p-content">{ p.desc }</p>
              </div>
              <div className="col-md-8 lpad-20">
                <div className="main-image">
                  <img src={this.state.publicPath + this.state.projectInfo.images[0] }/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Content pid={ this.state.projectId } info={ pInfo }/>
      </div>
    );
  }
}

ProjectDetail.defaultProps = {
  projects: plist
};

export default ProjectDetail;