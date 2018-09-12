/**
 * _Brief Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import ReactTooltip from 'react-tooltip';
import Image from "../../../Media/Image";

export class _Brief extends Component {
  render() {
    let {p} = this.props;
    return (
      <div>
        <div className="p-desc">
          <h1 className="p-title"> {p.info.name }</h1>
          <span className="p-tags">{p.info.tags.join(" // ") }</span>
          <p className="p-content">I wrote a small Android application for a short assignment in my Mobile Programming course. While I was testing the application I was reminded of Mondrian’s work, and decided to brand it accordingly.
          </p>
        </div>
        <Image className='p-image'
               path={p.publicPath}
               previewFile={'screenshot-2-cropped.png'}
               fullscreenFile={'screenshot-2-cropped.png'}/>
        <button
          data-tip="scroll down"
          id="scroll-arrow"
          onClick={this.props.handleScroll}
          className="bottom" type="button">
          <img alt="scroll down arrow" src={window.location.origin + '/images/icons/2x/arrow.png'}/>
        </button>
        <ReactTooltip place="bottom" className="tooltip" effect="solid"/>
      </div>
    );
  }
}

_Brief.defaultProps = {
  p: {}, // project data,
  handleScroll: () => {},
};
