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
    }, 250);
    window.addEventListener('mousemove', tHandler);
  }

  handleMouseMove(e) {
    let xMax = window.innerWidth;
    let yMax = window.innerHeight;
    console.log(xMax, yMax);
    let halfX = Math.round(xMax / 2);
    let halfY = Math.round(yMax / 2);
    console.log("calcs: ", halfX, halfY);

    let x = e.clientX;
    let y = e.clientY;
    let angle = this.calculateAngle([halfX, halfY], [x, y]);
    if (x < halfX && y < halfY) {
      // 1
      console.log("In 1");
      let color1, color2;
      let mR = this.state.prevMouseRegion;
      console.log("mR: ", mR);
      color1 = "#111";
      if (mR === 2) color2 = '#222';
      else if (mR === 3) color2 = '#333';
      else if (mR === 4) color2 = '#444';
      else color2 = '#555';
      this.updateGradient([color1, color2], angle);
      if (this.state.prevMouseRegion !== 1) {
        this.setState({
          prevMouseRegion: mR,
          mouseRegion: 1
        });
      }

      //console.log(x + "/" + xMax, ", ", y + "/" + yMax, " half: ", halfX, halfY);
    } else if (x >= halfX && y < halfY) {
      // 2
      console.log("In 2");
      let color1, color2;
      let mR = this.state.mouseRegion;
      console.log("mR: ", mR);
      color1 = "#222";
      if (mR === 1) color2 = '#111';
      else if (mR === 3) color2 = '#333';
      else if (mR === 4) color2 = '#444';
      else color2 = '#555';
      this.updateGradient([color1, color2], angle);
      if (this.state.prevMouseRegion !== 2) {
        this.setState({
          prevMouseRegion: mR,
          mouseRegion: 2
        });
      }
      //console.log(x + "/" + xMax, ", ", y + "/" + yMax, " half: ", halfX, halfY);
    } else if (x < halfX && y >= halfY) {
      // 3
      console.log("In 3");
      let color1, color2;
      let mR = this.state.mouseRegion;
      color1 = "#333";
      if (mR === 1) color2 = '#111';
      else if (mR === 2) color2 = '#222';
      else if (mR === 4) color2 = '#444';
      else color2 = '#555';
      this.updateGradient([color1, color2], angle);
      if (this.state.prevMouseRegion !== 3) {
        this.setState({
          prevMouseRegion: mR,
          mouseRegion: 3
        });
      }
      //console.log(x + "/" + xMax, ", ", y + "/" + yMax, " half: ", halfX, halfY);
    } else if (x >= halfX && y >= halfY) {
      // 4
      console.log("In 4");
      let color1, color2;
      let mR = this.state.mouseRegion;
      color1 = "#444";
      if (mR === 1) color2 = '#111';
      else if (mR === 2) color2 = '#222';
      else if (mR === 3) color2 = '#333';
      else color2 = '#555';
      this.updateGradient([color1, color2], angle);
      if (this.state.prevMouseRegion !== 4) {
        this.setState({
          prevMouseRegion: mR,
          mouseRegion: 4
        });
      }
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