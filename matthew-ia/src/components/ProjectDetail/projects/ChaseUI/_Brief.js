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
          <p className="p-content">For Team Sunergy, Appalachian State University’s Solar Vehicle Team, I designed and developed a telemetry dashboard interface for race strategy.
          </p>
        </div>
        <Image onLoad={this.props.setColumnWidth}
               className='p-image'
               path={p.publicPath}
               previewFile={'battery-production.png'}
               fullscreenFile={'battery-production.png'}/>
        <button
          data-tip="scroll down"
          id="scroll-arrow"
          onClick={this.props.handleScroll}
          className="bottom" type="button">
          <img alt="scroll down arrow" src={window.location.origin + '/images/icons/2x/arrow.png'}/>
        </button>
        <ReactTooltip className="tooltip" effect="solid"/>
      </div>
    );
  }
}

_Brief.defaultProps = {
  p: {}, // project data,
  handleScroll: () => {},
};
