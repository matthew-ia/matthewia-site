/**
 * P1Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import ProjectDetail from "../ProjectDetail";

class P1Content extends Component {
  render() {
    let images = this.props.info[0].images;
    let publicPath = this.props.info[1];
    console.log(images);
    console.log(publicPath);
    return (
      <div className="sub-content container-fluid">
        <div className="row">
          <div className="col-sm-12 no-pad">
            <div className="image">P1Content
            <img src={ publicPath + images[1] }/></div>
          </div>
        </div>
      </div>
    );
  }
}

P1Content.defaultProps = {
  pid: undefined,
  info: []
};

export default P1Content;