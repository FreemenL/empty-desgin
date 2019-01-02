import React,{Component} from 'react';
import NProgress from 'nprogress';
import ReactDOM from 'react-dom';
import childRoutes from '@pages/load-child-routes';
import { Prompt } from 'react-router';
import compoments from '@components/load-component';
import Routers,{ HashRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';


const RouteWithSubRoutes = (route) =>{
  return(
  <Route exact path={route.path} render={props =>{ 
    return(
    <route.component  jump={props.history.push} params={props.match.params} {...props}/>
  )}}/>

)}
// 路由配置

class Routes extends Component{
  static getDerivedStateFromProps(nextProps,prevState){
    NProgress.start();
    return null
  }
  constructor(props){
    super(props);
    this.state={};
    NProgress.start();
  }

  render() {
    return (
      <Router  getUserConfirmation={compoments.getConfirmation("comfirm")}>
        <div className="app">
            <Switch>
              {childRoutes.map((route:any, i) =>(
                <RouteWithSubRoutes key={route.path} {...route}/>
              ))}
            </Switch>
        </div>
      </Router>
    )
  }
}

export default Routes;