/**
 * ProjectDetail Component
 *
 * Wrapper for a project's Detail view. Includes defining which project content should
 * be displayed, as well as managing static elements like the Floating List component.
 *
 * @extends Component
 */

import React, {Component} from "react";
import { Helmet } from "react-helmet";

import FloatingList from "../ProjectList/FloatingList";
import Brief from "./Brief";
import Gallery from "./Gallery";


import {adjustNavbar, padNum} from "../../tools";
const data = require("../../projectlist.json");
const plist = data.plist;
const BRIEF = 0;
const GALLERY = 1;

class Detail extends Component {

  constructor(props) {
    super(props);

    // Generate names and links for jump table for FloatingList
    let projectLinks = [];  // Holds elements of projects with their proper detail page links
    let pid = ""; // Temporary variable to hold each object's id for the link location
    let p = { }; // Temporary object for the the elements of projectLinks
    Object.keys(this.props.projects).forEach(function(key) { // Iterates over project list to define the above vars
      pid = key.substr(1);
      p = {
        name: props.projects[key].name,
        loc: '/projects/' + pid
      };
      projectLinks.push(p);
    });

    let path = this.props.location.pathname;
    let id = path.substr((path.lastIndexOf('/')+1), path.length);

    this.state = {
      currentPath: this.props.location.pathname,
      projectId: id,
      plistJumpTable: projectLinks,
      projectInfo: this.props.projects["p"+id], // sets project info obj from json data
      publicPath: window.location.origin + '/images/p' + id + "/",
      scrollPosX: 0,
      navbarOffset: 0,
      currentView: 0,
      windowHeight: window.innerHeight,
    };

    this.saveXScrollPosition = this.saveXScrollPosition.bind(this);
    this.getXScrollPosition = this.getXScrollPosition.bind(this);
    this.refreshView = this.refreshView.bind(this);
    this.updateCurrentView = this.updateCurrentView.bind(this);
    this.preventDefaultScrolling = this.preventDefaultScrolling.bind(this);
    this.updateWindowHeight = this.updateWindowHeight.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  componentDidMount() {
    // Adjusts navbar with offset and saves the returned default value to state.
    // The state is used when the component unmounts to reset it.
    this.setState({navbarOffset: adjustNavbar()});
    window.scroll(0,0);
    window.addEventListener('load', this.refreshView);
    window.addEventListener('wheel', this.preventDefaultScrolling);
    window.addEventListener('resize', this.updateWindowHeight);
    window.addEventListener('focus', this.handleFocus);

    /*let cols = document.getElementsByClassName('col');
    let width = 0;
    let margin = parseInt(window.getComputedStyle(cols[0]).getPropertyValue('margin-right').slice(0, -2));
    console.log(margin);
    for (let col of cols) {
      width += parseInt(getComputedStyle(col).getPropertyValue('width').slice(0, -2)) + margin;
      console.log(getComputedStyle(col).getPropertyValue('width'));
    }
    document.getElementById('gallery').style.width = (width + 60) + 'px';
    console.log(document.getElementById('gallery').style.width);
    */
  }

  componentWillUnmount() {
    // Reset the navbar and scrollbar height spacing when leaving to another route
    adjustNavbar(this.state.navbarOffset);
    window.removeEventListener('load', this.refreshView);
    window.removeEventListener('wheel', this.preventDefaultScrolling);
    window.removeEventListener('resize', this.updateWindowHeight);
    window.removeEventListener('focus', this.handleFocus);
  }

  saveXScrollPosition(xPos) {
    if (xPos !== this.state.scrollPosX) {
      this.setState({scrollPosX: xPos});
    }
  }

  getXScrollPosition() {
    return this.state.scrollPosX;
  }

  preventDefaultScrolling(e) {
    if (window.innerWidth > 1280) { // handle mobile
      e.preventDefault();
    }

  }

  refreshView() {
    let y = document.getElementById('gallery').getBoundingClientRect().y;
    if (y <= 0) {
      this.updateCurrentView(1);
    }
  }

  handleFocus() {
    if (document.getElementById('detail') === null) return; // First load, skip

    if (this.state.currentView === GALLERY) {
      let height = this.state.windowHeight;
      if (document.body.scrollHeight !== height) {
        setTimeout(()=>{
          // console.log("scrolling to fix ", top, height, document.body.scrollHeight);
          window.scrollTo({
            top:  document.body.scrollHeight,
          });
        }, 300);
      }
    }
  }

  updateWindowHeight() {
    // Note: gets called twice for every window focus event
    this.setState({windowHeight: window.innerHeight});
  }

  updateCurrentView(newState) {
    let galleryNav = document.getElementById("gallery-nav");
    if (newState) { // newState == GALLERY
      let scrollArrow = document.getElementById('scroll-arrow');
      scrollArrow.className = "top";
      scrollArrow.dataset.tip = "scroll up";
      document.getElementById("p-name").style.opacity = "1.0";
      if (galleryNav !== null) {
        setTimeout(()=>{
          document.getElementById("gallery-nav").style.visibility = "visible";
          document.getElementById("gallery-nav").style.opacity = "1.0";
        }, 700);
      }

    } else {
      document.getElementById('scroll-arrow').className = 'bottom';
      document.getElementById('scroll-arrow').dataset.tip = "scroll down";
      document.getElementById("p-name").style.opacity = "0";
      if (galleryNav !== null) {
        document.getElementById("gallery-nav").style.opacity = "0";
        document.getElementById("gallery-nav").style.visibility = "hidden";
      }
    }
    this.setState({currentView: newState});
  }

  render() {
    let projectData = {
      id: padNum(this.state.projectId),
      info: this.state.projectInfo, // name, tags
      publicPath: this.state.publicPath,
      saveScrollX: this.saveXScrollPosition,
      getScrollX: this.getXScrollPosition,
    };
    return (
      <div id="detail">
        <Helmet>
          <title>matthew.ia > projects > {projectData.id}</title>
        </Helmet>
        <div id="p-id">
          <span>{projectData.id}</span>
          <span id="p-name">{projectData.info.name}</span>
        </div>
        <Brief p={projectData}
               currentView={this.state.currentView}
               updateCurrentView={this.updateCurrentView}/>
        <Gallery p={projectData}
                 currentView={this.state.currentView}
                 updateCurrentView={this.updateCurrentView}/>
        <FloatingList plist={this.state.plistJumpTable}
                      currentProjectPath={this.props.location.pathname}
                      shouldRedirect={false}/>
      </div>
    );
  }
}

Detail.defaultProps = {
  projects: plist // project list set using the json data; doesn't change state
};

export default Detail;