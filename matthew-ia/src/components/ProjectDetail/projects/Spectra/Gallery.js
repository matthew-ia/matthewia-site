/**
 * P1Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";


class Gallery extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      scrollPos: 0,
    };

    this.handleScrollUp = this.handleScrollUp.bind(this);
  }

  componentDidMount() {
    // Saves the x position of the first child of Gallery on load
    // This helps determine the far left scroll position of the Gallery component
    this.setState({
      scrollLeftDefault: document.getElementById("1").getBoundingClientRect().x,
    });
  }

  /**
   * TODO
   * @param e – event fired from clicking on anchor
   */
  handleScrollUp(e) {
    let xPos = document.getElementById("1").getBoundingClientRect().x;
    if (e.deltaY < 0 && (xPos === this.state.scrollLeftDefault)) {
      window.scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
      });
      document.getElementById("p-name").style.opacity = "0";
      document.getElementById("scroll-arrow").className = "bottom";
      document.getElementById("detail").className = "hidescroll";
    }
    e.preventDefault(); // This is very necessary so the normal anchor snapping doesn't occur.
  }

  render() {
    return (
      <section id="gallery" onWheel={this.handleScrollUp}>Gallery
        <br/><br/><br/><br/><br/>
        <p className="yeah" id="1">Inspired by Spike Jonze’s film <i>Her</i>, I created a mock informational brochure documenting the fictional operating system, OS One (OS1). I took creative liberty in writing the copy for the document, as I imagined how the OS could be used. This project was the final product of a culmination of mini personal projects related to Her, as well as the starting point of my interest in technical writing.</p>
        <p className="yeah" id="2">WHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHATWHAT</p>
      </section>

    );
  }
}

Gallery.defaultProps = {
  p: {}, // project data (object); id, info.name, info.tags, publicPath
};

export default Gallery;