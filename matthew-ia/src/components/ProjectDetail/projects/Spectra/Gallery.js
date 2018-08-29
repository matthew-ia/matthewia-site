/**
 * P1Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";

import {indexOf_HTMLNodes} from "../../../../tools";


class Gallery extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      scrollPos: 0,
      windowWidth: window.innerWidth,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollUp = this.handleScrollUp.bind(this);
    this.handleScrollHorizontal = this.handleScrollHorizontal.bind(this);
    this.updateWindowSize = this.updateWindowSize.bind(this);
    this.handleTimeline = this.handleTimeline.bind(this);
    this.handleSmoothScroll = this.handleSmoothScroll.bind(this);
  }

  componentDidMount() {
    // Saves the x position of the first child of Gallery on load
    // This helps determine the far left scroll position of the Gallery component
    this.setState({
      scrollLeftDefault: document.getElementById("1").getBoundingClientRect().x,
      galleryPos: document.getElementById("gallery").getBoundingClientRect().y
    });
    window.addEventListener('resize', this.updateWindowSize);
    //TODO: Dynamically set the gallery width based on the number of images to display
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  }

  /**
   * Get current window size. Needs to be saved/used for the timeline nav updating.
   */
  updateWindowSize() {
    this.setState({windowWidth: window.innerWidth});
  }

  /**
   * Handles scroll behavior, and when to fire the other scroll functions.
   * @param e – the scroll event
   */
  handleScroll(e) {
    e.preventDefault();
    // X Position of the first element in the Gallery.
    // TODO: update the element selector to not rely on an ID
    let xPos = document.getElementById("1").getBoundingClientRect().x;
    // Y Position of the Gallery section (top left corner)
    let yPos = this.state.galleryPos;
    //console.log("w.sY: ", window.scrollY, ", yPos: ", yPos);
    this.props.p.saveScrollX(window.scrollX);
    //console.log("Saving wsX: ", window.scrollX);
    // Ignore scroll events if we're in the middle of handleScrollUp's scroll behavior
    if (window.scrollY < yPos) return;
    //console.log("handling");
    // Check if the first element in Gallery is scrolled all the way to the left
    if (xPos === this.state.scrollLeftDefault) {
      if (e.deltaY < -30) { // If it is, scroll up (animate) when user scrolls up.
        this.handleScrollUp(e, xPos);
      } else { // Else scroll horizontally
        this.handleScrollHorizontal(e);
      }
    } else { // Otherwise scroll horizontally
      this.handleScrollHorizontal(e);
    }
  }

  /**
   * Handles scrolling the screen up (back to the Brief section)
   * @param e – event fired from clicking on anchor
   */
  handleScrollUp(e, xPos) {
    //console.log("xPos: ", xPos);
    //console.log("xDefault: ", this.state.scrollLeftDefault);
    // Smooth scroll up to Brief section.
    window.scroll({
      left: 0,
      top: 0,
      behavior: "smooth"
    });
    // Set styles that need updating based on the section in view
    document.getElementById("p-name").style.opacity = "0";
    document.getElementById("timeline").style.opacity = "0";
    document.getElementById("timeline").style.visibility = "hidden";
    document.getElementById("scroll-arrow").className = "bottom";
    document.getElementById("scroll-arrow").dataset.tip = "scroll down";
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
    // Simulate a little extra force to scroll more significantly
    delta = delta * (-3);
    // Scroll the view
    document.documentElement.scrollLeft -= delta;
    // Call helper for timeline nav link updates
    this.handleTimeline();
    e.preventDefault();
  }

  /**
   * Smooth scrolling for using the timeline nav.
   * @param e – event fired from clicking on anchor
   */
  handleSmoothScroll(e) {
    console.log(e.target);
    let id = e.target.getAttribute("href").slice(1,);
    let anchorXPos = document.getElementById(id).getBoundingClientRect().x + window.scrollX - this.state.scrollLeftDefault;
    console.log(document.getElementById(id));
    console.log("X: ", anchorXPos);
    window.scroll({
      left: anchorXPos,
      behavior: "smooth"
    });

    let timelineList = Array.prototype.slice.call(document.getElementsByClassName('timeline-link'));
      for (let link of timelineList) {
        console.log("hmm: ", link.getAttribute('href').slice(1,), id);
        if (link.getAttribute('href').slice(1,) === id) {
          link.className = 'timeline-link active';
        } else {
          link.className = 'timeline-link';
        }
      }

    e.preventDefault(); // This is very necessary so the normal anchor snapping doesn't occur.
  }

  /**
   * Handles the timeline link updating behavior when scrolled to
   */
  handleTimeline() {
    // Get the elements with class that indicates it starts a time period section.
    let timeMarkers = Array.prototype.slice.call(document.getElementsByClassName('time-marker'));
    // Calculate about 50% of the view width
    let halfWidth = this.state.windowWidth / 2;

    // For each time period-start element
    for (let period of timeMarkers) {
      // Get the period-start element's X Position (relative to current view)
      let pX = period.getBoundingClientRect().x;
      // Check if the X Position is within the left half of the screen (0-50%).
      // Also check that its not off screen (but to the left, resulting in negative X)
      if (pX <= halfWidth && pX > 0) {
        // Get index of the period that is in view
        let i = timeMarkers.indexOf(period);
        // Get an array of the timeline links (which jump to the period-start elements)
        let timelineList = Array.prototype.slice.call(document.getElementsByClassName('timeline-link'));
        // For each link in the timeline link list
        for (let link of timelineList) {
          // Match the link to the current period.
          if (timelineList.indexOf(link) === i) {
            link.className = 'timeline-link active';
          } else { // Not a match, set to the the default style
            link.className = 'timeline-link';
          }
        }
      }
    }
  }

  render() {
    let {p} = this.props;
    return (
      <section id="gallery" onWheel={this.handleScroll}>
        <div id="timeline">
          <ul>
            <li onClick={this.handleSmoothScroll}><a className="timeline-link active" href="#t2016">2016</a></li>
            <li onClick={this.handleSmoothScroll}><a className="timeline-link" href="#t2017">2017</a></li>
            <li onClick={this.handleSmoothScroll}><a className="timeline-link" href="#t2018">2018</a></li>
          </ul>
        </div>
        <div>
          <div id="t2016" className="col time-marker">
            <img className="sm" id="1" src={p.publicPath + "ab.jpg"}/>
            <img className="sm" src={p.publicPath + "bbb.jpg"}/>
          </div>
          <div className="col">
            <img className="md" src={p.publicPath + "cd.jpg"}/>
            <p className="stacked">I'm a full column of text. I'm a full column of text. I'm a full column of text. I'm a full column of text. I'm a full column of text. I'm a full column of text. I'm a full column of text.I'm a full column of text. I'm a full column of text. I'm a full column of text.</p>
          </div>
          <img className="lg"  src={p.publicPath + "dd.jpg"}/>
          <img className="lg"  src={p.publicPath + "dd.jpg"}/>
          <img id="t2017" className="md time-marker" src={p.publicPath + "cd.jpg"}/>
          <img className="md" src={p.publicPath + "cd.jpg"}/>
          <img className="md" src={p.publicPath + "cd.jpg"}/>
          <img className="md" src={p.publicPath + "cd.jpg"}/>
          <img id="t2018" className="md time-marker" src={p.publicPath + "cd.jpg"}/>
          <img className="md" src={p.publicPath + "cd.jpg"}/>
        </div>
      </section>

    );
  }
}

Gallery.defaultProps = {
  p: {}, // project data (object); id, info.name, info.tags, publicPath
};

export default Gallery;