/**
 * Home Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import { Helmet } from "react-helmet";
import MessageButton from "../Message/MessageButton";

import {throttle} from "../../tools";


class Home extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      mouseRegion: 0,
      prevMouseRegion: 0,
    };
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.updateGradient = this.updateGradient.bind(this);
    this.calculateAngle = this.calculateAngle.bind(this);
  }
  componentWillMount() {
    // Throttled handler wrapper for handleMouseMove
    const tHandler = throttle((e)=>{
      this.handleMouseMove(e);
    }, 150);
    window.addEventListener('mousemove', tHandler);
  }

  handleMouseMove(e) {
    let xMax = window.innerWidth;
    let yMax = window.innerHeight;
    //console.log(xMax, yMax);
    let halfX = Math.round(xMax / 2);
    let halfY = Math.round(yMax / 2);
    //console.log("calcs: ", halfX, halfY);

    let x = e.clientX;
    let y = e.clientY;
    let xPercent = Math.round((x / xMax) * 100);
    let yPercent = Math.round((y / yMax) * 100);
    let angle = this.calculateAngle([halfX, halfY], [x, y]);
    // DEFAULT, 1, 2, 3, 4
    // Black, Blue, Green, Red, Pink
    let colors = ['#000', '#4286f4', "#2ebc21", "#d82727", "#d527d8"];
    this.updateGradient({x: xPercent, y: yPercent});
  }

  /**
   * Update the gradient for the CSS animation based on mouse position and angle.
   * @param position – object with x & y as percents
   */
  updateGradient(position) {
    let logotype = document.getElementById('logotype');
    console.log(position.x, position.y);
    logotype.style.backgroundPositionX = position.x + "%";
    logotype.style.backgroundPositionY = position.y + "%";
    console.log(logotype);
  }

  calculateAngle(originPair, positionPair) {
    let deltaX = positionPair[0] - originPair[0];
    let deltaY = positionPair[1] - originPair[1];
    let rad = Math.atan2(deltaY, deltaX);
    return Math.round(rad * (180 / Math.PI));
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
        </div>
        <MessageButton />
      </div>

    );
  }
}

export default Home;