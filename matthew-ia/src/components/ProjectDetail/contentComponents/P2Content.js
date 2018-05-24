/**
 * P2Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import P1Content from "./P1Content";

class P2Content extends Component {
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

P2Content.defaultProps = {
  pid: undefined,
  info: []
};

export default P2Content;