/**
 * ProjectList Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom'

import FloatingList from "./FloatingList";

import { adjustNavbar, padNum } from '../../tools';
const data = require("../../projectlist.json");
const plist = data.plist;

class ProjectList extends Component {
  // eslint-disable-next-line require-jsdoc
  constructor(props) {
    super(props);
    let counter = 0; // Counts the number of projects to properly size the project carousel
    let projects = [];  // Holds list items of projects with their proper detail page links
    let projectNames = []; // Holds the names & ids of all projects to send as a prop to the FloatingList
    let p = { }; // Temporary object for the the elements of projectNames
    let pid = "";
    Object.keys(this.props.projects).forEach(function(key) { // Iterates over project list to define the above vars
      counter++;
      pid = key.substr(1);
      projects.push(<li id={ "" + key } className="p-item">
        <Link to={ '/projects/' + pid }>
          <div id="p-id">{ padNum(pid)} </div>
          <img className="p-image" src={ window.location.origin + '/images/p-placeholder.png'} alt={ "Project " + pid } />
          <div className="p-label">
            <h3>{ props.projects[key].name }</h3>
            <p> { props.projects[key].tags.join(" // ") }</p>
          </div>
        </Link></li>);
      p = {
        name: props.projects[key].name,
        loc: "#" + key
      };
      projectNames.push(p);
    });

    this.state = {
      plist: projects,
      plistNames: projectNames,
      count: counter,
      navbarOffset: 0,
    };

    this.handleSmoothScroll = this.handleSmoothScroll.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    // Dynamically set the projects div width based on the number of projects to display
    let width = ((this.state.count * (650 + 64)) + 200);
    document.getElementById('projects').style.width = width + "px";

    // Adjusts navbar with offset and saves the returned default value to state.
    // The state is used when the component unmounts to reset it.
    this.setState({navbarOffset: adjustNavbar()});

    // Replace mouse wheel vertical scrolling with horizontal scrolling
    document.addEventListener('wheel', this.handleScroll);
  }

  componentWillUnmount() {
    console.log("unmounting");
    // Reset the navbar and scrollbar height spacing when leaving to another route
    adjustNavbar(this.state.navbarOffset);
    // Reset mouse wheel behavior to default
    document.removeEventListener('wheel', this.handleScroll);
  }

  /**
   * Manages horizontal scroll behavior in the ProjectList view for both
   * mousewheels and trackpads.
   * @param e – event fired on scroll (mousewheel or trackpad)
   */
  handleScroll(e) {
    console.log('the scroll things', e);
    if(e.type !== 'wheel') return; // If scrolling with scroll bar ignore this code
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

  /**
   * Used as onClick behavior for FloatingList anchor tags in the ProjectList
   * view.
   * @param e – event fired from clicking on anchor
   */
  handleSmoothScroll(e) {
    let id = e.target.parentNode.getAttribute("href").slice(1,);
    let anchorXPos = document.getElementById(id).getBoundingClientRect().x + window.scrollX - 60;
    console.log(document.getElementById(id));
    console.log("X: ", anchorXPos);
    window.scroll({
      left: anchorXPos,
      behavior: "smooth"
    });
    e.preventDefault(); // This is very necessary so the normal anchor snapping doesn't occur.
  }

  render() {
    return (
      <div id="projects">
        <Helmet>
          <title>matthew.ia > projects</title>
        </Helmet>
        <h1>matthew.ia</h1>
        <div id='filter-button'>Filter</div>
        <FloatingList plist={this.state.plistNames} scroll={this.handleSmoothScroll}/>
        <div className="content">
          <ul id="p-list">
            { this.state.plist }
          </ul>
        </div>
      </div>
    );
  }
}

ProjectList.defaultProps = {
  projects: plist
};

export default ProjectList;