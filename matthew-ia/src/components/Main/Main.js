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
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import Home from '../Home/Home';


class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/info' component={Home} />
        <Route exact path='/projects' component={ProjectList} />
        <Route path='/projects/:number' component={ProjectDetail} />
      </Switch>
    );
  }
}

export default Main;