/**
 * FloatingList Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import { Link } from "react-router-dom";

class FloatingList extends Component {
  constructor(props) {
    super(props);

    let projects = [];
    // This fires if FloatingList is being used on a page ProjectDetail component
    // If this is the case, the links should cause a redirect, therefore they should use the Link component
    let currentPid = 0;
    if (this.props.currentProjectPath) {
      currentPid = this.props.currentProjectPath.slice(-1);
      console.log(currentPid);
    }
    if (this.props.shouldRedirect) {
      this.props.plist.forEach(function (p) {
        projects.push(<li><Link to={p.loc}>{p.name}</Link></li>)
      });
    }
    // Otherwise, they should use a standard anchor tag to just jump along the project carousel on the ProjectList comp
    else {
      let nodeStyle = "";
      let nameStyle = "";
      this.props.plist.forEach(function (p) {
        nodeStyle = "li-node";
        nameStyle = "li-pname";
        if (currentPid !== 0)
          if (p.loc.slice(-1) === currentPid) {
            nodeStyle = "li-node li-node-selected";
            nameStyle = "li-pname li-pname-selected";
          }
        projects.push(<li>
          <a href={p.loc}><div className={nodeStyle}/>
            <div className={nameStyle}>{p.name}</div></a></li>)
      });
    }

    console.log(this.props.currentProjectPath);

    this.state = {
      projectList: projects
    }
  }

  // TODO: write a clickHandler function to add an animation to whichever project is jumped to using the floating list
  // This should only work for when user is viewing the ProjectList component, and be ignored when on a detail page

  render() {
    return (
      <div id='floating-list'>
        <ul>
          { this.state.projectList }
        </ul>
      </div>
    );
  }
}

FloatingList.defaultProps = {
  plist: undefined,
  currentProjectPath: undefined,
  shouldRedirect: false
};

export default FloatingList;