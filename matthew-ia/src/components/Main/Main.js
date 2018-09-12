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
import Detail from '../ProjectDetail/Detail';
import Home from '../Home/Home';
import Resume from '../Resume/Resume';


class Main extends Component {
  render() {
    return (
      <main id="main-content">
        <Switch>
          <Route exact path="/" render={() => ( /* Handles default route */
            <Redirect to="/info"/>
          )}/>
          <Route exact path='/info' component={Home} />
          <Route exact path='/projects' component={ProjectList} />
          <Route path='/projects/:number' component={Detail} />
          <Route exact path='/resume' component={Resume} />
          <Route component={Home} /> {/* Handles garbage slugs */}
        </Switch>
      </main>
    );
  }
}

export default Main;