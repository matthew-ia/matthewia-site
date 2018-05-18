/**
 * ProjectDetail Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import { Helmet } from "react-helmet";

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

  padNum(number) {
    if (number<=99) number = ("000"+number).slice(-2);
    return number;
  }

  render() {
    const projectId = this.padNum(this.state.projectId);
    let pnum = "p" + this.state.projectId;
    const p = plist[pnum];
    console.log(pnum);
    console.log(p);
    return (
      <div id="detail">
        <Helmet>
          <title>matthew.ia > projects > { projectId }</title>
        </Helmet>
        <div>Showing project { projectId }</div>
        <h1 className="title">Project Name</h1>
        <span className="tags">Some tags</span>
        <p className="content">Some content</p>
        <div id="main-image" className="image">
          Main image
        </div>
      </div>
    );
  }
}

export default ProjectDetail;