/**
 * P1Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import Brief from "../../Brief.js";
import Gallery from "../../Gallery.js";
import SpectraContent from "../../SpectraGallery";
class Spectra extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let {p} = this.props;
    return (
      <div>
        <Brief p={p} />
        <Gallery p={p} content={<SpectraContent p={p}/>}/>
      </div>
    );
  }
}

Spectra.defaultProps = {
  p: {}, // project data (object); id, info.name, info.tags, publicPath
};

export default Spectra;