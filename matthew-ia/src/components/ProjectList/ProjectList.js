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
import HorizontalScroll from 'react-scroll-horizontal';

import FloatingList from "./FloatingList";

import { getScrollBarSizes } from '../../tools';
import { padNum } from "../../tools";
import { horizontalScroll } from "../../tools";

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
      count: counter
    }
  }

  componentDidMount() {
    // Dynamically set the projects div width based on the number of projects to display
    let width = ((this.state.count * (650 + 64)) + 200);
    document.getElementById('projects').style.width = width + "px";

    // Adjust the white space between the bottom navbar and the scrollbar. This prevents the offset content visual shift
    let scrollBarHeight = getScrollBarSizes()[0];
    let marginBottom = 115 - scrollBarHeight;
    document.getElementById('bottom-nav').style.marginBottom = marginBottom +  "px";
  }

  componentWillUnmount() {
    console.log("unmounting");
    // Reset the navbar and scrollbar height spacing when leaving to another page/route
    let marginBottom = 115; // Reset to default
    document.getElementById('bottom-nav').style.marginBottom = marginBottom +  "px";
  }

  render() {
    const child   = { width: `30em`, height: `100%`}
    const parent  = { width: `60em`, height: `100%`}
    return (
      <div id="projects">
        <Helmet>
          <title>matthew.ia > projects</title>
        </Helmet>
        <h1>matthew.ia</h1>
        <div id='filter-button'>Filter</div>
        <FloatingList plist={this.state.plistNames}/>
        <div className="content">
          <HorizontalScroll>
            <ul id="p-list">
              { this.state.plist }
            </ul>
          </HorizontalScroll>
        </div>
      </div>
    );
  }
}

ProjectList.defaultProps = {
  projects: plist
};

export default ProjectList;