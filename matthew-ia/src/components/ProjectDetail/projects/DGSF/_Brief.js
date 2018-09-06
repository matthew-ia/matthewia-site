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
          <p className="p-content">In 2013 I was given the opportunity to build a website for the Doris Goedeke Scholarship Foundation (DGSF), a non-profit that helps fund college experiences for Hispanic youth. I worked on a volunteer basis to build the site, and then maintained it until early 2018. This project sparked my interest in computer science and web design as a career option. It wasn’t until 2017 that I started looking back to the project and thinking about how it could be improved with my new skillset.
          </p>
          <ul id='project-links'>
            <li><a href="https://github.com/matthew-ia/matthewia-site/issues/57"
                   target='_blank'>>> Redesign_Proposal.pdf</a></li>
          </ul>
        </div>
        <Image onLoad={this.props.setColumnWidth}
               className='p-image'
               path={p.publicPath}
               previewFile={'dashboard-mockup.png'}
               fullscreenFile={'standard-mode-full.png'}/>
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
