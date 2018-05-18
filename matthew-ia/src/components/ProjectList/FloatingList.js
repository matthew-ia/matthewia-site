/**
 * FloatingList Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import { Link } from 'react-router-dom'


class FloatingList extends Component {
  constructor(props) {
    super(props);

    let projects = [];
    Object.keys(this.props.projects).forEach(function(key) {
      // console.log(key);
      projects.push(<li className="p-item"><Link to='/projects/1'>{ props.projects[key].name }</Link></li>)
    });

    this.state = {
      plist: projects
    }
  }

  render() {
    console.log(Object.keys(this.props.projects));
    return (
      <div>
        <ul id="p-list">
          { this.state.plist }
        </ul>
      </div>
    );
  }
}

FloatingList.defaultProps = {
  projects: undefined
};

export default FloatingList;