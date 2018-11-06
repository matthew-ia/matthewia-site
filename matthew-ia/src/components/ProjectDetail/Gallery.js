/**
 * P1Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import {_Gallery as Spectra} from "./projects/Spectra/_Gallery";
import {_Gallery as ChaseUI} from "./projects/ChaseUI/_Gallery";
import {_Gallery as DashUI} from "./projects/DashUI/_Gallery";
import {_Gallery as ProLo} from "./projects/ProLo/_Gallery";
import {_Gallery as DGSF} from "./projects/DGSF/_Gallery";
import {_Gallery as Citrus} from "./projects/Citrus/_Gallery";
import {_Gallery as MondrianSim} from "./projects/MondrianSim/_Gallery";

import {debounce} from "../../tools";

import zenscroll from "../../zenscroll";

const BRIEF = 0;
const GALLERY = 1;

class Gallery extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      galleryPosY: 0,
      windowWidth: window.innerWidth,
      hasNativeSmoothScroll: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
    this.handleScrollUp = this.handleScrollUp.bind(this);
    this.handleScrollHorizontal = this.handleScrollHorizontal.bind(this);
    this.updateGalleryWidth = this.updateGalleryWidth.bind(this);
    this.handleGalleryNav = this.handleGalleryNav.bind(this);
    this.handleSmoothScroll = this.handleSmoothScroll.bind(this);
    this.setDynamicColumnWidth = this.setDynamicColumnWidth.bind(this);
    this.setColumnWidth = this.setColumnWidth.bind(this);
  }

  componentDidMount() {
    // Saves the x position of the first child of Gallery on load
    // This helps determine the far left scroll position of the Gallery component
    let smoothScroll = 'scrollBehavior' in document.documentElement.style;
    this.setState({
      galleryPosY: document.getElementById("gallery").getBoundingClientRect().y,
      hasNativeSmoothScroll: smoothScroll,
    });
    window.addEventListener('resize', this.updateGalleryWidth);
    window.addEventListener('load', this.updateGalleryWidth);
    this.updateGalleryWidth();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateGalleryWidth);
    window.removeEventListener('load', this.updateGalleryWidth);
  }

  /**
   * Sets the Gallery width based on the content.
   */
  updateGalleryWidth() {
    if (window.scrollX !== 0) console.log("not left");
    setTimeout(()=>{
      let cols = document.getElementsByClassName('col');
      let lastEl = cols[cols.length - 1];
      // Prevents error when user navigates away from page and the setTimeout
      // still runs, but now the element is undefined.
      if (lastEl === undefined) return;
      let xPos = lastEl.getBoundingClientRect().x;
      if (window.scrollX !== 0) xPos += window.scrollX;
      //console.log(cols, lastEl, xPos);
      document.getElementById('gallery').style.width = xPos + parseInt(lastEl.style.width.slice(0,-2)) + 'px';
      //console.log(xPos, parseInt(lastEl.style.width.slice(0,-2)), lastEl);
    }, 1450);
  }

  setDynamicColumnWidth() {
    let columns = document.getElementsByClassName('col');
    if (columns.length) { // exists
      for (let col of columns) {
        let firstImage = undefined;
        for (let child of col.childNodes) {
          if (child.tagName === 'IMG') {
            console.log("found image", child, window.getComputedStyle(child).getPropertyValue('width'));
            firstImage = child;
            break;
          }
        }
        // If no images in column, check for p tag.
        let text;
        for (let child of col.childNodes) {
          if (child.tagName === 'P') {
            //console.log("found text");
            text = child;
          }
        }
        if (firstImage !== undefined) { // exists
          //console.log("Setting col width: image");
          console.log(firstImage);
          col.style.width = window.getComputedStyle(firstImage).getPropertyValue('width');
        } else if (text) { // if text exists, a p tag was found, so set a max-width value.
          //console.log("Setting col width: 25vw");
          col.style.maxWidth = "25vw";
        }
      }
    }
  }

  setColumnWidth(e) {
    //console.log("*dabs* ", e.target.parentElement.parentElement);
    if (window.innerWidth <= 1280) return; // handle mobile
    let image = e.target;
    let col = image.parentElement.parentElement;
    col.style.width = window.getComputedStyle(image).getPropertyValue('width');
  }

  /**
   * Handles scroll behavior, and when to fire the other scroll functions.
   * @param e – the scroll event
   */
  handleScroll(e) {
    if (window.innerWidth <= 1280) return; // handle mobile
    e.preventDefault();
    // X Position of the first element in the Gallery.
    // TODO: update the element selector to not rely on an ID
    // let xPos = document.getElementById("1").getBoundingClientRect().x;
    // Y Position of the Gallery section (top left corner)
    let yPos = this.state.galleryPosY;
    //console.log("w.sY: ", window.scrollY, ", yPos: ", yPos);
    //console.log("Saving wsX: ", window.scrollX);
    // Ignore scroll events if we're in the middle of handleScrollUp's scroll behavior
    if (this.state.hasNativeSmoothScroll) {
      if (window.scrollY < yPos) {
        console.log("GALLERY->BRIEF : blocking scroll with return : ", window.scrollY, yPos);
        //console.log("yeeting that scroll AWAY");
        if (zenscroll.moving()) return;
        //return;
      }
    } else if (zenscroll.moving()) return;

    //console.log("handling");
    // Check if the first element in Gallery is scrolled all the way to the left
    if (window.scrollX === 0) {
      if (e.deltaY < -30) { // If it is, scroll up (animate) when user scrolls up.
        this.props.p.saveScrollX(window.scrollX);
        this.handleScrollUp();
      } else { // Else scroll horizontally
        this.handleScrollHorizontal(e);
      }
    } else { // Otherwise scroll horizontally
      this.handleScrollHorizontal(e);
    }
  }

  /**
   * Handles scrolling the screen up (back to the Brief section)
   * @param e – event fired from scrolling up with mousepad/trackpad
   */
  handleScrollUp() {
    console.log("SCROLLING UP");
    //console.log("xDefault: ", this.state.scrollLeftDefault);
    // Smooth scroll up to Brief section.
    if (!this.state.hasNativeSmoothScroll) {
      window.scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
      });
    } else {
      let scrollBarHeight = window.innerHeight - document.documentElement.clientHeight;
      console.log(scrollBarHeight);
      window.scrollBy(0, -scrollBarHeight);
      zenscroll.toY(0, 500);
    }

    this.props.updateCurrentView(0);
    // Set styles that need updating based on the section in view
    /*
    document.getElementById("p-name").style.opacity = "0";
    document.getElementById("scroll-arrow").className = "bottom";
    document.getElementById("scroll-arrow").dataset.tip = "scroll down";
    document.getElementById("detail").className = "hidescroll";

    // FIXME: project specific
    document.getElementById("timeline").style.opacity = "0";
    document.getElementById("timeline").style.visibility = "hidden";
    */
    //document.addEventListener('wheel', this.handleScroll);
    //e.preventDefault(); // This is very necessary so the normal anchor snapping doesn't occur.
  }

  /**
   * Manages horizontal scroll behavior in the Gallery view for both
   * mousewheels and trackpads.
   * @param e – event fired on scroll (mousewheel or trackpad)
   */
  handleScrollHorizontal(e) {
    // FIXME: Safari needs same fix from Projects page for horizontal scrolling to work.
    // Blocking horizontal scroll
    if (this.props.currentView === BRIEF) return;
    if (document.getElementsByClassName('video-expanded').length !== 0
      || document.getElementsByClassName('image-expanded').length !== 0) return;

    let delta = 0;
    // Trackpads will use X or Y delta depending on which one is greater.
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      delta = e.deltaX;
    } else delta = e.deltaY; // Mousewheel will always use the deltaY.
    // Simulate a little extra force to scroll more significantly
    delta = delta * (-3);
    // Scroll the view
    window.scrollBy(-delta, 0);
    // Call helper for timeline nav link updates
    this.handleGalleryNav();
    e.preventDefault();
  }

  /**
   * Smooth scrolling for using the timeline nav.
   * @param e – event fired from clicking on anchor
   */
  handleSmoothScroll(e) {
    let id = e.target.getAttribute("href").slice(1,);
    let anchorXPos = document.getElementById(id).getBoundingClientRect().x
      + window.scrollX - (this.state.windowWidth * .1);
    console.log(document.getElementById(id));
    console.log("X: ", anchorXPos);
    window.scroll({
      left: anchorXPos,
      behavior: "smooth"
    });

    // FIXME: project specific
    let galleryNavList = Array.prototype.slice.call(document.getElementsByClassName('gallery-link'));
    for (let link of galleryNavList) {
      console.log("hmm: ", link.getAttribute('href').slice(1,), id);
      if (link.getAttribute('href').slice(1,) === id) {
        link.className = 'gallery-link active';
      } else {
        link.className = 'gallery-link';
      }
    }
    e.preventDefault(); // This is very necessary so the normal anchor snapping doesn't occur.
  }

  /**
   * Handles the timeline link updating behavior so that when the user is scrolling
   * through a period, the timeline links appropriately indicate they're in that period.
   */
  handleGalleryNav() {
    // Get the elements with class that indicates it starts a time period section.
    let periodStartElements = Array.prototype.slice.call(document.getElementsByClassName('gallery-marker'));
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
        let timelineList = Array.prototype.slice.call(document.getElementsByClassName('gallery-link'));
        // For each link in the timeline link list
        for (let link of timelineList) {
          // Match the link to the current period.
          if (timelineList.indexOf(link) === i) {
            if (link.className !== 'gallery-link active') // only overwrite if not set
              link.className = 'gallery-link active';
          } else { // Not a match, set to the the default style
            link.className = 'gallery-link';
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
              return <Spectra p={p}
                              handleSmoothScroll={this.handleSmoothScroll}
                              setColumnWidth={this.setColumnWidth}/>;
            case '02':
              return <ChaseUI p={p}
                              handleSmoothScroll={this.handleSmoothScroll}
                              setColumnWidth={this.setColumnWidth}/>;
            case '03':
              return <DashUI p={p}
                              handleSmoothScroll={this.handleSmoothScroll}
                              setColumnWidth={this.setColumnWidth}/>;
            case '04':
              return <ProLo p={p}
                             handleSmoothScroll={this.handleSmoothScroll}
                             setColumnWidth={this.setColumnWidth}/>;
            case '05':
              return <DGSF p={p}
                            handleSmoothScroll={this.handleSmoothScroll}
                            setColumnWidth={this.setColumnWidth}/>;
            case '06':
              return <Citrus p={p}
                           handleSmoothScroll={this.handleSmoothScroll}
                           setColumnWidth={this.setColumnWidth}/>;
            case '07':
              return <MondrianSim p={p}
                             handleSmoothScroll={this.handleSmoothScroll}
                             setColumnWidth={this.setColumnWidth}/>;
            default:
              return <Spectra p={p}
                              handleSmoothScroll={this.handleSmoothScroll}
                              setColumnWidth={this.setColumnWidth}/>;
          }
        })()}
      </section>
    );
  }
}

Gallery.defaultProps = {
  p: {}, // project data (object); id, info.name, info.tags, publicPath,
  currentView: 0,
  updateCurrentView: ()=>{},
};

export default Gallery;