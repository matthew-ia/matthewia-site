/**
 * Nav Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'
import {loadPage} from '../../tools';

class Nav extends Component {
  render() {
    return (
      <div>
        <nav id="bottom-nav">
          <ul>
            <li><NavLink activeClassName="selected"
                         to='/info'
                         onClick={loadPage}>info</NavLink></li>
            <li><NavLink activeClassName="selected"
                         to='/projects'
                         onClick={loadPage}>projects</NavLink></li>
            <li><NavLink activeClassName="selected"
                         to='/resume'
                         onClick={loadPage}>resume</NavLink></li>
          </ul>
        </nav>
        <nav id="mobile-nav">
          <ul>
            <li><NavLink activeClassName="selected"
                         to='/info'
                         onClick={loadPage}>info</NavLink></li>
            <li><NavLink activeClassName="selected"
                         to='/projects'
                         onClick={loadPage}>projects</NavLink></li>
            <li><NavLink activeClassName="selected"
                         to='/resume'
                         onClick={loadPage}>resume</NavLink></li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;