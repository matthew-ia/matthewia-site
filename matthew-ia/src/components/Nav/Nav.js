/**
 * Nav Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import {getScrollBarSizes} from "../../tools";

class Nav extends Component {
  render() {
    return (
      <nav id="bottom-nav">
        <ul>
          <li><NavLink activeClassName="selected"
                       to='/info'>info</NavLink></li>
          <li><NavLink activeClassName="selected"
                       to='/projects'>projects</NavLink></li>
          <li><NavLink activeClassName="selected"
                       to='/resume'>resume</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Nav;