/**
 * FloatingList Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";

class FloatingList extends Component {
  constructor(props) {
    super(props);
    let projects = [];
    // This fires if FloatingList is being used on a page ProjectDetail component
    // If this is the case, the links should cause a redirect, therefore they should use the Link component
    let currentPid = 0;
    if (this.props.currentProjectPath) {
      currentPid = this.props.currentProjectPath.slice(-1);
    }

    let nodeStyle = "";
    let nameStyle = "";
    this.props.plist.forEach(function (p) {
      nodeStyle = "li-node";
      nameStyle = "li-pname";
      if (currentPid !== 0)
        if (p.loc.slice(-1) === currentPid) {
          nodeStyle += " li-node-selected";
          nameStyle += " li-pname-selected";
        }
      projects.push(<li>
        <a href={p.loc} onClick={props.scroll}><div className={nodeStyle}/>
          <div className={nameStyle}>{p.name}</div></a></li>)
    });

    this.state = {
      projectList: projects
    };
  }

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
  shouldRedirect: false,
  scroll: () => {}
};

export default FloatingList;