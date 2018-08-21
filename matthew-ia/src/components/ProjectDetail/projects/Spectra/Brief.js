/**
 * P1Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import {getScrollBarSizes} from "../../../../tools";

class Brief extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {};

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    // Replace mouse wheel vertical scrolling with horizontal scrolling
    document.addEventListener('wheel', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('wheel', this.handleScroll);
  }

  /**
   * TODO
   * @param e – event fired on scroll (mousewheel or trackpad)
   */
  handleScroll(e) {
    if (e.deltaY >= 15 || e.type === 'click') {
      document.getElementById("p-name").style.opacity = "1.0";
      document.getElementById("scroll-arrow").style.opacity = "0";
      document.getElementById("gallery").scrollIntoView({
        behavior: "smooth",
      });
    }
    e.preventDefault();
  }

  render() {
    let {p} = this.props;
    return (
      <section id="brief">
        <div className="p-desc">
          <h1 className="p-title"> {p.info.name }</h1>
          <span className="p-tags">{p.info.tags.join(" // ") }</span>
          <p className="p-content">Inspired by Spike Jonze’s film <i>Her</i>, I created a mock informational brochure documenting the fictional operating system, OS One (OS1). I took creative liberty in writing the copy for the document, as I imagined how the OS could be used. This project was the final product of a culmination of mini personal projects related to Her, as well as the starting point of my interest in technical writing.</p>
        </div>
        <img className="p-image" src={p.publicPath + "ab.jpg"}/>
        <a href="#" id="scroll-arrow" onClick={this.handleScroll}>
          <img src=""/>
          Scroll V
        </a>
      </section>
    );
  }
}

Brief.defaultProps = {
  p: {}, // project data (object); id, info.name, info.tags, publicPath
};

export default Brief;