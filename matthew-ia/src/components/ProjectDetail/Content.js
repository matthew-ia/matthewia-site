/**
 * Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";

class Content extends Component {
  render() {
    return (
      <div className="sub-content container-fluid">
        <div className="row">
          <div className="col-sm-12 no-pad">
            <div className="image">Image.</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 no-pad">
            <div className="image">Image.</div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 no-pad">
            <div className="image">Image.</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;