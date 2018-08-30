/**
 * P1Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import SpectraGallery from "./SpectraGallery";

class Gallery extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      scrollPos: 0,
      scrollLeftDefault: 0,
      galleryPos: 0,
      windowWidth: window.innerWidth,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollUp = this.handleScrollUp.bind(this);
    this.handleScrollHorizontal = this.handleScrollHorizontal.bind(this);
    this.updateWindowSize = this.updateWindowSize.bind(this);
    this.handleTimeline = this.handleTimeline.bind(this);
    this.handleSmoothScroll = this.handleSmoothScroll.bind(this);
    this.setDynamicColumnWidth = this.setDynamicColumnWidth.bind(this);
    this.refreshView = this.refreshView.bind(this);
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

    window.addEventListener('load', this.refreshView);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  }

  refreshView() {
    this.props.p.saveScrollX(window.scrollX);
    document.getElementById('root').style.opacity = '0';
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
    setTimeout(()=> {
      document.getElementById('root').style.transition = 'opacity 0.5s ease-in-out';
      document.getElementById('root').style.opacity = '1.0';
      this.setState({
        scrollLeftDefault: document.getElementById("1").getBoundingClientRect().x,
        galleryPos: document.getElementById("gallery").getBoundingClientRect().y
      });
    }, 1000);
    //document.getElementById('detail').style.visibility = 'visible';
    // Set styles that need updating based on the section in view
    document.getElementById("p-name").style.opacity = "0";
    document.getElementById("scroll-arrow").className = "bottom";
    document.getElementById("scroll-arrow").dataset.tip = "scroll down";
    document.getElementById("detail").className = "hidescroll";

    // FIXME: project specific
    document.getElementById("timeline").style.opacity = "0";
    document.getElementById("timeline").style.visibility = "hidden";
    this.setState({
      scrollLeftDefault: document.getElementById("1").getBoundingClientRect().x,
      galleryPos: document.getElementById("gallery").getBoundingClientRect().y
    });
  }

  /**
   * Get current window size. Needs to be saved/used for the timeline nav updating.
   */
  updateWindowSize() {
    this.setState({windowWidth: window.innerWidth});
  }

  setDynamicColumnWidth() {
    let columns = document.getElementsByClassName('col');
    if (columns) { // exists
      for (let col of columns) {
        let firstImage;
        for (let child of col.childNodes) {
          if (child.tagName === 'IMG') {
            firstImage = child;
            break;
          }
        }
        // If no images in column, check for p tag.
        let text;
        for (let child of col.childNodes) {
          if (child.tagName === 'P') {
            text = child;
          }
        }
        if (firstImage) { // exists
          col.style.width = window.getComputedStyle(firstImage).getPropertyValue('width');
        } else if (text) { // if text exists, a p tag was found, so set a max-width value.
          col.style.maxWidth = "25vw";
        }
      }
    }
  }

  /**
   * Handles scroll behavior, and when to fire the other scroll functions.
   * @param e – the scroll event
   */
  handleScroll(e) {
    console.log("Gallery:handleScroll");
    e.preventDefault();
    // X Position of the first element in the Gallery.
    // TODO: update the element selector to not rely on an ID
    let xPos = document.getElementById("1").getBoundingClientRect().x;
    // Y Position of the Gallery section (top left corner)
    let yPos = this.state.galleryPos;
    //console.log("w.sY: ", window.scrollY, ", yPos: ", yPos);
    //console.log("Saving wsX: ", window.scrollX);
    // Ignore scroll events if we're in the middle of handleScrollUp's scroll behavior
    if (window.scrollY < yPos) return;
    //console.log("handling");
    // Check if the first element in Gallery is scrolled all the way to the left
    if (xPos === this.state.scrollLeftDefault) {
      if (e.deltaY < -30) { // If it is, scroll up (animate) when user scrolls up.
        this.props.p.saveScrollX(window.scrollX);
        this.handleScrollUp(e);
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
  handleScrollUp() {
    //console.log("xDefault: ", this.state.scrollLeftDefault);
    // Smooth scroll up to Brief section.
    window.scroll({
      left: 0,
      top: 0,
      behavior: "smooth"
    });
    // Set styles that need updating based on the section in view
    document.getElementById("p-name").style.opacity = "0";
    document.getElementById("scroll-arrow").className = "bottom";
    document.getElementById("scroll-arrow").dataset.tip = "scroll down";
    document.getElementById("detail").className = "hidescroll";

    // FIXME: project specific
    document.getElementById("timeline").style.opacity = "0";
    document.getElementById("timeline").style.visibility = "hidden";
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
    // FIXME: project specific
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

    // FIXME: project specific
    let timelineList = Array.prototype.slice.call(document.getElementsByClassName('time-link'));
    for (let link of timelineList) {
      console.log("hmm: ", link.getAttribute('href').slice(1,), id);
      if (link.getAttribute('href').slice(1,) === id) {
        link.className = 'time-link active';
      } else {
        link.className = 'time-link';
      }
    }
    e.preventDefault(); // This is very necessary so the normal anchor snapping doesn't occur.
  }

  /**
   * Handles the timeline link updating behavior so that when the user is scrolling
   * through a period, the timeline links appropriately indicate they're in that period.
   */
  handleTimeline() {
    // Get the elements with class that indicates it starts a time period section.
    let periodStartElements = Array.prototype.slice.call(document.getElementsByClassName('time-marker'));
    // Calculate about 50% of the view width
    let halfWidth = this.state.windowWidth / 2;

    // For each time period-start element
    for (let period of periodStartElements) {
      // Get the period-start element's X Position (relative to current view)
      let pX = period.getBoundingClientRect().x;
      // Check if the X Position is within the left half of the screen (0-50%) or
      // off screen to the left (resulting in a negative X)
      if (pX <= halfWidth) {
        // Get index of the period that is in view
        let i = periodStartElements.indexOf(period);
        // Get an array of the timeline links (which jump to the period-start elements)
        let timelineList = Array.prototype.slice.call(document.getElementsByClassName('time-link'));
        // For each link in the timeline link list
        for (let link of timelineList) {
          // Match the link to the current period.
          if (timelineList.indexOf(link) === i) {
            if (link.className !== 'time-link active') // only overwrite if not set
              link.className = 'time-link active';
          } else { // Not a match, set to the the default style
            link.className = 'time-link';
          }
        }
      }
    }
  }

  render() {
    let {p} = this.props;
    return (
      <section id="gallery" onWheel={this.handleScroll}>
        {(() => {
          switch(p.id) {
            case '01':
              console.log("gallery it worked");
              return <SpectraGallery p={p} handleSmoothScroll={this.handleSmoothScroll}/>;
            default:
              return <SpectraGallery p={p} handleSmoothScroll={this.handleSmoothScroll}/>;
          }
        })()}
      </section>

    );
  }
}

Gallery.defaultProps = {
  p: {}, // project data (object); id, info.name, info.tags, publicPath,
};

export default Gallery;