/**
 * P1Content Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import {_Brief as Spectra} from "./projects/Spectra/_Brief";
import {_Brief as ChaseUI} from "./projects/ChaseUI/_Brief";
import {_Brief as DashUI} from "./projects/DashUI/_Brief";
import {_Brief as ProLo} from "./projects/ProLo/_Brief";
import {_Brief as DGSF} from "./projects/DGSF/_Brief";
import {_Brief as Citrus} from "./projects/Citrus/_Brief";
import {_Brief as MondrianSim} from "./projects/MondrianSim/_Brief";

import {loadPage, debounce} from "../../tools";
import zenscroll from '../../zenscroll';

class Brief extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {
      hasNativeSmoothScroll: false,
      galleryPosY: 0,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    //console.log("=========\nBrief is mounting");
    loadPage();
    let smoothScroll = 'scrollBehavior' in document.documentElement.style;
    this.setState({
      galleryPosY: document.getElementById("gallery").getBoundingClientRect().y,
      hasNativeSmoothScroll: smoothScroll,
    });
  }

  shouldComponentUpdate(nextProps) {
    //console.log("=========\nBrief is updating");
    //console.log(this.props.p.id);
    if (this.props.p.id !== nextProps.p.id) {
      //console.log("nextProps found new id: ", nextProps.p.id);
      loadPage();
    }
    return true;
  }

  /**
   * TODO
   * @param e – event fired on scroll (mousewheel or trackpad)
   */
  handleScroll(e) {
    if (window.innerWidth <= 1280) return; // handle mobile
    e.preventDefault();
    if (e.deltaY >= 15) { // GOING DOWN ---> GALLERY
      this.props.updateCurrentView(1);
      let scrollDownPixels = this.state.galleryPosY;
      console.log("should b scrolling");
      if (!this.state.hasNativeSmoothScroll) {
        console.log("scrolling down", scrollDownPixels, window.scrollY, "delta: ", e.deltaY);
        //if (window.scrollY > 0 && window.scrollY < scrollDownPixels) return;
        window.scroll({
          top: scrollDownPixels,
          left: this.props.p.getScrollX(),
          behavior: "smooth",
        });
      } else zenscroll.toY(scrollDownPixels, 500);
    } else {

      // If user clicks the scroll-arrow when they're in the GALLERY section
      // GOING UP (from Gallery) ---> BRIEF
      if (e.type === 'click' && document.getElementById("scroll-arrow").className === 'top') {
        this.props.updateCurrentView(0);
        if (this.state.hasNativeSmoothScroll) {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else {
          let scrollBarHeight = window.innerHeight - document.documentElement.clientHeight;
          console.log(scrollBarHeight);
          window.scrollBy(0, -scrollBarHeight);
          zenscroll.toY(0);
        }
        console.log("windowScrollX: ", window.scrollX);
        this.props.p.saveScrollX(window.scrollX);
        console.log("Saving wsX: ", window.scrollX);
      }
      // GOING DOWN ---> GALLERY
      // If user clicks the scroll-arrow when they're in the BRIEF section
      // FIXME: change document.body.scrollHeight to y position of gallery?????
      else if (e.type === 'click') {
        this.props.updateCurrentView(1);
        if (this.state.hasNativeSmoothScroll) {
          window.scroll({
            top: document.body.scrollHeight,
            left: this.props.p.getScrollX(),
            behavior: "smooth",
          });
        } else zenscroll.toY(document.body.scrollHeight);
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
              return <Spectra p={p} handleScroll={this.handleScroll}/>;
            case '02':
              return <ChaseUI p={p} handleScroll={this.handleScroll}/>;
            case '03':
              return <DashUI p={p} handleScroll={this.handleScroll}/>;
            case '04':
              return <ProLo p={p} handleScroll={this.handleScroll}/>;
            case '05':
              return <DGSF p={p} handleScroll={this.handleScroll}/>;
            case '06':
              return <Citrus p={p} handleScroll={this.handleScroll}/>;
            case '07':
              return <MondrianSim p={p} handleScroll={this.handleScroll}/>;
            default:
              return <Spectra p={p} handleScroll={this.handleScroll}/>;
          }
        })()}
      </section>
    );
  }
}

Brief.defaultProps = {
  p: {}, // project data (object); id, info.name, info.tags, publicPath,
  currentView: 0,
  updateCurrentView: ()=>{},
};

export default Brief;