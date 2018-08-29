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

    //TODO: Dynamically set the gallery width based on the number of images to display

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
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowSize);
  }

  updateWindowSize() {
    this.setState({windowWidth: window.innerWidth});
  }

  handleScroll(e) {
    e.preventDefault();
    let xPos = document.getElementById("1").getBoundingClientRect().x;
    let yPos = this.state.galleryPos;
    //console.log("w.sY: ", window.scrollY, ", yPos: ", yPos);
    this.props.p.saveScrollX(window.scrollX);
    //console.log("Saving wsX: ", window.scrollX);
    if (window.scrollY < yPos) return;
    //console.log("handling");
    if (xPos === this.state.scrollLeftDefault) {
      if (e.deltaY < -30) {
        this.handleScrollUp(e, xPos);
      } else {
        this.handleScrollHorizontal(e);
      }
    } else {
      this.handleScrollHorizontal(e);
    }
    e.preventDefault();
  }

  /**
   * TODO
   * @param e – event fired from clicking on anchor
   */
  handleScrollUp(e, xPos) {
    //console.log("xPos: ", xPos);
    //console.log("xDefault: ", this.state.scrollLeftDefault);
    window.scroll({
      left: 0,
      top: 0,
      behavior: "smooth"
    });
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
    delta = delta * (-3);
    document.documentElement.scrollLeft -= delta;
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

  handleTimeline() {
    let timeMarkers = document.getElementsByClassName('time-marker');
    timeMarkers = Array.prototype.slice.call(timeMarkers);
    let halfWidth = this.state.windowWidth / 2;
    for (let period of timeMarkers) {
      let pX = period.getBoundingClientRect().x;
      if (pX <= halfWidth) {
        if (pX > 0) { // not negative, so it's in view
          console.log(timeMarkers);
          let i = timeMarkers.indexOf(period);
          let timelineList = Array.prototype.slice.call(document.getElementsByClassName('timeline-link'));
          for (let p of timeMarkers) {
            if (p.id === timeMarkers[i].id) {
              for (let link of timelineList) {
                if (timelineList.indexOf(link) === i) {
                  link.className = 'timeline-link active';
                } else {
                  link.className = 'timeline-link';
                }
              }
            }
          }
        }
        //console.log(period.id + ": ", pX);
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