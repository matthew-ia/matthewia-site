/**
 * FloatingList Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import ProjectList from "./ProjectList";


class FloatingList extends Component {
  constructor(props) {
    super(props);

    let projects = [];
    this.props.plistNames.forEach(function(p) {
      projects.push(<li><a href={ p.id }>{ p.name }</a></li>)
    });

    this.state = {
      plist: projects
    }
  }

  // TODO: write a clickHandler function to add an animation to whichever project is jumped to using the floating list

  render() {
    return (
      <div id='floating-list'>
        <ul>
          { this.state.plist }
        </ul>
      </div>
    );
  }
}

FloatingList.defaultProps = {
  plistNames: undefined
};

export default FloatingList;