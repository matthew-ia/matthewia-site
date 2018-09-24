/**
 * Home Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import { Helmet } from "react-helmet";
import ReactTooltip from 'react-tooltip';

import {throttle} from "../../tools";


class Home extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      mouseRegion: 0,
      prevMouseRegion: 0,
    };
    this.handleGradientShift = this.handleGradientShift.bind(this);
  }
  componentDidMount() {
    // Throttled handler wrapper for handleMouseMove
    /*
    const tHandler = throttle((e)=>{
      this.handleMouseMove(e);
    }, 0);
    */
    window.addEventListener('mousemove', this.handleGradientShift);
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleGradientShift);
  }

  handleGradientShift(e) {
    let xMax = window.innerWidth;
    let yMax = window.innerHeight;
    let x = e.clientX;
    let y = e.clientY;
    let xPercent = Math.round((x / xMax) * 100);
    let yPercent = Math.round((y / yMax) * 100);
    let logotype = document.getElementById('logotype');
    logotype.style.backgroundPositionX = xPercent + "%";
    logotype.style.backgroundPositionY = yPercent + "%";
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>matthew.ia > info</title>
        </Helmet>
        <div id="info">
          <h1 id="logotype">matthew.ia</h1>
          <h2>designer + programmer</h2>
          <p>
            I’m Matthew Alicea, a multidisciplinary designer with a B.S. in Computer Science from Appalachian State University. I create digital interfaces and user experiences, graphic designs, and print designs.
          </p>
          <ul id="contact">
            <li id="headshot">
              <img src={window.location.origin + "/images/headshot.png"}/>
            </li>
            <li>
              <p className='label'>contact</p>
              <a href="mailto:info@matthewia.com">info@matthewia.com</a>
            </li>
            <li>
              <p className='label'>resume</p>
              <a href={window.location.origin + "/docs/matthew-alicea.pdf"}>matthew-alicea.pdf</a>
            </li>
          </ul>
        </div>
        <button
          data-tip="README"
          id="question-button"
          className="hidden" type="button">
          <img alt="scroll down arrow" src={window.location.origin + '/images/icons/2x/arrow.png'}/>
        </button>
        <ReactTooltip place="bottom" className="tooltip" effect="solid"/>
      </div>

    );
  }
}

export default Home;