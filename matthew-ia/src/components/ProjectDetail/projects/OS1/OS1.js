/**
 * P1Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import Brief from "./Brief.js";
import Gallery from "./Gallery.js";

class OS1 extends Component {
  render() {
    let {p} = this.props;
    return (
      <div>
        <Brief p={p}/>
        <Gallery p={p}/>
      </div>
    );
  }
}

OS1.defaultProps = {
  p: {}, // project data (object); id, info.name, info.tags, publicPath
};

export default OS1;