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
import ProjectFrame from "./ProjectFrame";

import { getScrollBarSizes } from '../../tools';

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
    Object.keys(this.props.projects).forEach(function(key) { // Iterates over project list to define the above vars
      counter++;
      projects.push(<li id={ "" + key } className="p-item">
        <Link to={ '/projects/' + key.substr(1) }>
          <img className="p-image" src={ window.location.origin + '/images/p-placeholder.png'} />
          <div className="p-label">
            <h3>{ props.projects[key].name }</h3>
            <p> { props.projects[key].tags.join(" // ") }</p>
          </div>
        </Link></li>);
      p = {
        name: props.projects[key].name,
        id: "#" + key
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
    let width = ((this.state.count * (650 + 64)) + 100);
    document.getElementById('projects').style.width = width + "px";

    // Adjust the white space between the bottom navbar and the scrollbar. This prevents the offset content visual shift
    let scrollBarHeight = getScrollBarSizes()[0];
    let marginBottom = 115 - scrollBarHeight;
    document.getElementById('bottom-nav').style.marginBottom = marginBottom +  "px";
  }

  componentWillUnmount() {
    // Reset the navbar and scrollbar height spacing when leaving to another page/route
    let marginBottom = 115; // Reset to default
    document.getElementById('bottom-nav').style.marginBottom = marginBottom +  "px";
  }

  render() {
    return (
      <div id="projects">
        <Helmet>
          <title>matthew.ia > projects</title>
        </Helmet>
        <h1>matthew.ia</h1>
        <div id='filter-button'>Filter</div>
        <FloatingList plistNames={this.state.plistNames}/>
        <ul id="p-list">
          { this.state.plist }
        </ul>
      </div>
    );
  }
}

ProjectList.defaultProps = {
  projects: plist
};

export default ProjectList;