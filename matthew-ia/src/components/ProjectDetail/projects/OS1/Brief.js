/**
 * P1Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";

class Brief extends Component {
  render() {
    let {p} = this.props.p;
    return (
      <div>
        <h1 className="p-title"> {p.info.name }</h1>
        <span className="p-tags">{p.info.tags.join(" // ") }</span>
      </div>
    );
  }
}

Brief.defaultProps = {
  p: {}, // project data (object); id, info.name, info.tags, publicPath
};

export default Brief;