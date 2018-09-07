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
    let angle = this.calculateAngle([halfX, halfY], [x, y]);
    // DEFAULT, 1, 2, 3, 4
    let colors = ['#000', '#111', "222", "333", "444"];

    if (x < halfX && y < halfY && this.state.prevMouseRegion !== 1) {
      // 1
      console.log("In 1");
      let mR = this.state.prevMouseRegion;
      console.log("pMR: ", mR);
      let color1 = "#111";
      let color2 = colors[mR];
      this.updateGradient([color1, color2], angle);
      this.setState({
        prevMouseRegion: 1,
      });
    } else if (x >= halfX && y < halfY && this.state.prevMouseRegion !== 2) {
      // 2
      console.log("In 2");
      let mR = this.state.prevMouseRegion;
      console.log("pMR: ", mR);
      let color1 = "#222";
      let color2 = colors[mR];
      this.updateGradient([color1, color2], angle);
      this.setState({
        prevMouseRegion: 2,
      });
    } else if (x < halfX && y >= halfY && this.state.prevMouseRegion !== 3) {
      // 3
      console.log("In 3");
      let mR = this.state.prevMouseRegion;
      console.log("pMR: ", mR);
      let color1 = "#333";
      let color2 = colors[mR];
      this.updateGradient([color1, color2], angle);
      this.setState({
        prevMouseRegion: 3,
      });
    } else if (x >= halfX && y >= halfY && this.state.prevMouseRegion !== 4) {
      // 4
      console.log("In 4");
      let mR = this.state.prevMouseRegion;
      console.log("pMR: ", mR);
      let color1 = "#444";
      let color2 = colors[mR];
      this.updateGradient([color1, color2], angle);
      this.setState({
        prevMouseRegion: 4,
      });
      //console.log(x + "/" + xMax, ", ", y + "/" + yMax, " half: ", halfX, halfY);
    }
  }

  /**
   *
   * @param colors – array of two hex color codes
   * @param angle – degree of rotation
   */
  updateGradient(colors, angle) {
    console.log(colors, angle);
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