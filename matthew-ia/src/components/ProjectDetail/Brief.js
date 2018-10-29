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

import jump from 'jump.js';
import {loadPage, debounce} from "../../tools";

class Brief extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    this.state = {};

    this.handleScroll = this.handleScroll.bind(this);
    this.helpJump = this.helpJump.bind(this);
  }

  componentDidMount() {
    //console.log("=========\nBrief is mounting");
    loadPage();
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
      console.log("handling Scroll: ", e.deltaY);
      /*
      window.scroll({
        top: document.body.scrollHeight,
        left: this.props.p.getScrollX(),
        behavior: "smooth",
      });
      */
      /*jump(document.body.scrollHeight, {
        //duration: 1000,
        offset: 0,
        //callback: this.helpJump,
        //easing: easeInOutQuad,
        a11y: false
      });*/
      let efficientJump = debounce(()=>{
        jump(document.body.scrollHeight, {
          duration: 1250,
        });
        console.log("efficient jump successful");
      }, 1270);
      //debounce(this.helpJump, 500);
      efficientJump();


    } else {
      // If user clicks the scroll-arrow when they're in the GALLERY section
      // GOING UP (from Gallery) ---> BRIEF
      if (e.type === 'click' && document.getElementById("scroll-arrow").className === 'top') {
        this.props.updateCurrentView(0);
        /*window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        });*/
        jump(-document.body.scrollHeight, {
          duration: 2000,
        });
        console.log("windowScrollX: ", window.scrollX);
        this.props.p.saveScrollX(window.scrollX);
        console.log("Saving wsX: ", window.scrollX);
      }
      // GOING DOWN ---> GALLERY
      // If user clicks the scroll-arrow when they're in the BRIEF section
      else if (e.type === 'click') {
        this.props.updateCurrentView(1);
        /*window.scroll({
          top: document.body.scrollHeight,
          left: this.props.p.getScrollX(),
          behavior: "smooth",
        });*/
        jump(document.body.scrollHeight, {
          duration: 2000,
        });
      }
    }
  }

  helpJump() {
    jump(document.body.scrollHeight, {
      //duration: 1000,
      offset: 0,
      //callback: this.helpJump,
      //easing: easeInOutQuad,
      a11y: false
    });
    console.log("hmmm");
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