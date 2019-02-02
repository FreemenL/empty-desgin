import React,{Component} from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import childRoutes from '@pages/load-child-routes';
import getConfirmation from '@components/getConfirmation';
import { HashRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';
import { config } from '@config/index';


const RouteWithSubRoutes = (route) =>{
  return(
  <Route exact={route.childRoute?true:false}  path={route.path} render={props =>{ 
    return(
      <route.component  jump={props.history.push} params={props.match.params} {...props}/>
  )}}/>

)}
// 路由配置
const transRoute:Array<any> = [];

childRoutes.forEach((route:any)=>{
  config.mainRoute.forEach((tem)=>{
    if(route.path ===   tem ){
      transRoute.unshift(route)
    }
  })
})

class Routes extends Component<any>{
  static defaultProps = {
    route:transRoute,
    type:"main"
  }
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
    const renderEle={
      main:(
        <Router  getUserConfirmation={getConfirmation("comfirm")}>
            <Switch>
              {this.props.route.map((route:any, i) =>(
                <RouteWithSubRoutes key={route.path} {...route}/>
              ))}
            </Switch>
        </Router>
      ),
      child:(
        <Switch>
        {this.props.route.map((route:any, i) =>(
            <RouteWithSubRoutes childRoute={true} key={route.path} {...route}/>
          ))}
        </Switch>
      )
    }
    return renderEle[this.props.type]
  }
}


export default Routes;