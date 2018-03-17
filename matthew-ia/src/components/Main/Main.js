/**
 * Main Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import { Switch, Route } from 'react-router-dom';
import ProjectList from '../ProjectList/ProjectList';
import Home from '../Home/Home';


class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/projects' component={ProjectList} />
      </Switch>
    );
  }
}

export default Main;