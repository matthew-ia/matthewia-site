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

    //TODO: Dynamically set the gallery width based on the number of images to display

    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollUp = this.handleScrollUp.bind(this);
    this.handleScrollHorizontal = this.handleScrollHorizontal.bind(this);
  }

  componentDidMount() {
    // Saves the x position of the first child of Gallery on load
    // This helps determine the far left scroll position of the Gallery component
    this.setState({
      scrollLeftDefault: document.getElementById("1").getBoundingClientRect().x,
      galleryPos: document.getElementById("gallery").getBoundingClientRect().y
    });
  }

  handleScroll(e) {
    let xPos = document.getElementById("1").getBoundingClientRect().x;
    let yPos = this.state.galleryPos;
    console.log("w.sY: ", window.scrollY, ", yPos: ", yPos);
    e.preventDefault();
    if (window.scrollY < yPos) return;
    console.log("handling");
    if (xPos === this.state.scrollLeftDefault) {
      if (e.deltaY < -40) {
        this.handleScrollUp(e, xPos);
      } else {
        console.log("handleHorizontal1");
        this.handleScrollHorizontal(e);
      }
    } else {
      console.log("xpos is not ", this.state.scrollLeftDefault, ", its: ", xPos);
      console.log("handleHorizontal2");
      this.handleScrollHorizontal(e);
    }
    e.preventDefault();
  }

  /**
   * TODO
   * @param e – event fired from clicking on anchor
   */
  handleScrollUp(e, xPos) {
    console.log("xPos: ", xPos);
    console.log("xDefault: ", this.state.scrollLeftDefault);
    window.scroll({
      left: 0,
      top: 0,
      behavior: "smooth"
    });
    document.getElementById("p-name").style.opacity = "0";
    document.getElementById("scroll-arrow").className = "bottom";
    document.getElementById("detail").className = "hidescroll";
    //document.addEventListener('wheel', this.handleScroll);
    //e.preventDefault(); // This is very necessary so the normal anchor snapping doesn't occur.
  }

  /**
   * Manages horizontal scroll behavior in the Gallery view for both
   * mousewheels and trackpads.
   * @param e – event fired on scroll (mousewheel or trackpad)
   */
  handleScrollHorizontal(e) {
    let delta = 0;
    // Trackpads will use X or Y delta depending on which one is greater.
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      delta = e.deltaX;
    } else delta = e.deltaY; // Mousewheel will always use the deltaY.
    console.log(delta);
    delta = delta * (-3);
    document.documentElement.scrollLeft -= delta;
    e.preventDefault();
  }

  render() {
    return (
      <section id="gallery" onWheel={this.handleScroll}>Gallery
        <br/><br/><br/><br/><br/>
        <img id="1" />
        <img /><img />
        <img /><img />
        <img /><img />
        <img /><img />
        <img /><img />
      </section>

    );
  }
}

Gallery.defaultProps = {
  p: {}, // project data (object); id, info.name, info.tags, publicPath
};

export default Gallery;