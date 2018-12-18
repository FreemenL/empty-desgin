import React,{Component} from 'react';
import _import_views from './importView';
import { hot } from "react-hot-loader";

import { HashRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';
class Routes extends Component{
  render() {
    return (
      <Router>
          <Switch>
            <Route path="/" component={ _import_views("Test") } />
          </Switch>
      </Router>
    )
  }
}

export default hot(module)(Routes)