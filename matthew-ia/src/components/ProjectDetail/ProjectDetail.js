/**
 * ProjectDetail Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";

class ProjectDetail extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const path = this.props.location.pathname;
    return (
      <div>
        <h1>Hey! I'm a Project Detail view</h1>
        <p>Showing project at { path }</p>
      </div>
    );
  }
}

export default ProjectDetail;