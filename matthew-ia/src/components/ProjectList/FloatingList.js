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
  }

  render() {
    return (
      <div>
        <li><Link to='/projects/1'>{ this.props.projects.plist.p1.name }</Link></li>
        <li><Link to='/projects/2'>{ this.props.projects.plist.p2.name }</Link></li>
      </div>
    );
  }
}

FloatingList.defaultProps = {
  projects: undefined
};

export default FloatingList;