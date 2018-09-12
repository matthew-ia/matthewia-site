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
          <p className="p-content">Spectra is a search engine that visualizes ideas in a way that popular search engines do not. With Spectra, you search the web for ideas and concepts. This is a search engine for knowledge; not just for websites, or images, but for exploring entire systems of thought. I’ve worked on Spectra for over 22 years collaboratively with another designer, slowly conceptualizing and iterating.<br/><br/>
            Nothing is one thing, but rather a sum of its parts. Spectra aims to emulate that essence. No idea or concept exists in a vacuum separate from all other concepts, but rather is intertwined with others in order to exist. Spectra aims to let users explore that by focusing on three things: visualization, navigation, and organization.<br/><br/>
            For my senior capstone, I developed an early version of Spectra.
          </p>
        </div>
        <Image className='p-image'
               path={p.publicPath}
               previewFile={'spectra-preview.png'}
               fullscreenFile={'spectra-preview.png'}/>
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
