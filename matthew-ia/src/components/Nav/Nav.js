/**
 * Nav Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <nav id="bottom-nav">
        <ul>
          <li className="selected"><Link to='/'>Home</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;