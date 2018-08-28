/**
 * Main Component
 *
 * Desc
 *
 * @extends Component
 */

import React, {Component} from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import ProjectList from '../ProjectList/ProjectList';
import DetailWrapper from '../ProjectDetail/DetailWrapper';
import Home from '../Home/Home';


class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => ( /* Handles default route */
          <Redirect to="/info"/>
        )}/>
        <Route exact path='/info' component={Home} />
        <Route exact path='/projects' component={ProjectList} />
        <Route path='/projects/:number' component={DetailWrapper} />
        <Route component={Home} /> {/* Handles garbage slugs */}
      </Switch>
    );
  }
}

export default Main;