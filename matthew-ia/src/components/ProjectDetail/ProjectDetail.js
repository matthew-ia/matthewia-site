/**
 * ProjectDetail Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import { Helmet } from "react-helmet";

import Content from "./Content";

import { padNum } from "../../tools";

const data = require("../../projectlist.json");
const plist = data.plist;

class ProjectDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projectId: undefined
    }
  }

  componentWillMount() {
    this.getProjectInfo();
  }

  getProjectInfo() {
    let path = this.props.location.pathname;
    let id = path.substr((path.lastIndexOf('/')+1), path.length);
    //let name = projects.id.name;
    //let tags = projects.id.tags;
    //let content = projects.id.content;
    //let images = projects.id.images;
    this.setState({projectId: id});
  }

  render() {
    const projectId = padNum(this.state.projectId);
    let pnum = "p" + this.state.projectId;
    const p = plist[pnum];
    console.log(pnum);
    console.log(p);
    return (
      <div id="detail">
        <Helmet>
          <title>matthew.ia > projects > { projectId }</title>
        </Helmet>
        <div id="p-id">{ projectId }</div>
        <div className="main-image">Main image.</div>
        <div className="content">
          <h1 className="p-title">{ p.name }</h1>
          <span className="p-tags">{ p.tags.join(" // ") }</span>
          <p className="p-content">{ p.desc }</p>
        </div>
      </div>
    );
  }
}

export default ProjectDetail;