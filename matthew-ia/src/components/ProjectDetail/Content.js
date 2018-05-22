/**
 * Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";

class Content extends Component {
  // TODO: switch depending on the pid
  // see https://www.robinwieruch.de/conditional-rendering-react/#switch-case-operator
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

Content.defaultProps = {
  pid: undefined
};

export default Content;