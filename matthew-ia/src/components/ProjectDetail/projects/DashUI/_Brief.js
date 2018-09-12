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
          <p className="p-content">For Team Sunergy, Appalachian State University’s Solar Vehicle Team, I designed a digital dashboard interface for their 2018 vehicle, <a href="https://sunergy.appstate.edu/rose/" target='_blank'>ROSE</a>. We wanted to have a dashboard that evoked the feeling of being in a modern vehicle, but with additional tools fit for a solar-powered electric vehicle. The default screen needed to be easy for the driver to use, but also provide alternate views for testing purposes.
          </p>
        </div>
        <Image className='p-image'
               path={p.publicPath}
               previewFile={'standard-mode-full.png'}
               fullscreenFile={'standard-mode-full.png'}/>
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
