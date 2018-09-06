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
          <p className="p-content">Citrus started as brainstorm session with some friends on the beaches of NC. It would be a citrus-fruit-themed design brand, with each artist assuming the alias of a different citrus fruit. We’d sell prints on posters, shirts, etc. For now, it’s just some mockups of the website. Stay tuned.<br/><br/>
            The photos used in the mockups are not my own.<br/>
            Attribution: <a href="https://www.eyeofscottie.com/" target="_blank">EYEOFSCOTTIE</a> (first two), and <a href="http://www.kennethcappello.com/" target="_blank">Kenneth Cappello</a>.
          </p>
        </div>
        <img className='p-image' src={p.publicPath + 'citrus-2.png'}/>
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
