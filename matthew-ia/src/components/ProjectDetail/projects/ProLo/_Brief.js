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
          <p className="p-content">For the final project in my client-side web programming course, my group and I created a prototype business management tool to help keep track of property declarations for taxes. I designed the UI, and worked collaboratively to program the application using JavaScript and JQuery. Working on this project was my first experience leading a collaborative programming effort. I set up the project and wrote <a href="https://github.com/matthew-ia/prolo-systems/blob/master/README.md" target='_blank'>an extensive README</a> with the goal of getting us started by translating my design work into code, and outlining features and specs.
          </p>
          <ul id='project-links'>
            <li><a href="https://github.com/matthew-ia/matthewia-site/issues/57" target='_blank'>>> GitHub –  ProLo Systems</a></li>
          </ul>
        </div>
        <Image className='p-image'
               path={p.publicPath}
               previewFile={'dashboard-mockup.png'}
               fullscreenFile={'dashboard-mockup.png'}/>
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
