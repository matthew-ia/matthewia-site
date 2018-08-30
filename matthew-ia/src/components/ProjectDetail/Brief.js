/**
 * P1Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import SpectraBrief from "./SpectraBrief";

class Brief extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {};

    this.handleScroll = this.handleScroll.bind(this);
  }

  /**
   * TODO
   * @param e – event fired on scroll (mousewheel or trackpad)
   */
  handleScroll(e) {
    console.log("Brief:handleScroll");
    e.preventDefault();
    if (e.deltaY >= 15) {
      document.getElementById("scroll-arrow").className = "top";
      document.getElementById("scroll-arrow").dataset.tip = "scroll up";
      document.getElementById("p-name").style.opacity = "1.0";
      setTimeout(()=>{
        document.getElementById("timeline").style.visibility = "visible";
        document.getElementById("timeline").style.opacity = "1.0";
      }, 700);
      window.scroll({
        top: document.body.scrollHeight,
        left: this.props.p.getScrollX(),
        behavior: "smooth",
      });
      document.getElementById("detail").className = "showscroll";
    } else {
      // If user clicks the scroll-arrow when they're in the GALLERY section
      if (e.type === 'click' && document.getElementById("scroll-arrow").className === 'top') {
        document.getElementById("scroll-arrow").className = 'bottom';
        document.getElementById("scroll-arrow").dataset.tip = "scroll down";
        document.getElementById("p-name").style.opacity = "0";
        document.getElementById("timeline").style.opacity = "0";
        document.getElementById("timeline").style.visibility = "hidden";
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
        console.log("windowScrollX: ", window.scrollX);
        this.props.p.saveScrollX(window.scrollX);
        console.log("Saving wsX: ", window.scrollX);

        //document.addEventListener('wheel', this.handleScroll);
      }
      // If user clicks the scroll-arrow when they're in the BRIEF section
      else if (e.type === 'click') {
        console.log("getXScrollPos", this.props.p.getScrollX());
        document.getElementById("scroll-arrow").className = "top";
        document.getElementById("scroll-arrow").dataset.tip = "scroll up";
        document.getElementById("p-name").style.opacity = "1.0";
        setTimeout(()=>{
          document.getElementById("timeline").style.visibility = "visible";
          document.getElementById("timeline").style.opacity = "1.0";
        }, 700);
        window.scroll({
          top: document.body.scrollHeight,
          left: this.props.p.getScrollX(),
          behavior: "smooth",
        });
        //(document.removeEventListener('wheel', this.handleScroll), 1000);
      }
    }
  }

  render() {
    let {p} = this.props;
    return (
      <section id="brief" onWheel={this.handleScroll}>
        {(() => {
          switch(p.id) {
            case '01':
              console.log("it worked");
              return <SpectraBrief p={p} handleScroll={this.handleScroll}/>;
            default:
              return <SpectraBrief p={p} handleScroll={this.handleScroll}/>;
          }
        })()}
      </section>
    );
  }
}

Brief.defaultProps = {
  p: {}, // project data (object); id, info.name, info.tags, publicPath,
};

export default Brief;