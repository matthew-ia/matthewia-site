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
    let p = this.props.info[0];
    let publicPath = this.props.info[1];
    return (
      <div className="sub-content container-fluid">
        <div className="row">
          <div className="col-sm-12 no-pad">
            <div className="image">P2Content
              <img src={ publicPath + p.images[1] }/></div>
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