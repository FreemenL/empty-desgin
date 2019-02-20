import React,{ Component } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import childRoutes from '@pages/load-child-routes';
import { HashRouter as Router, Route, Switch ,withRouter } from 'react-router-dom';
import { config } from '@config/index';
import  { getConfirmation } from 'emptyd';
// 初始化滚动状态 
class ScrollToTop extends Component<any,any>{
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      const container:any = document.getElementById("content");
      container&&container.scrollTo(0,0)
    }
  }
  render() {
    return this.props.children
  }
}
const ScrollToTopComponent = withRouter(ScrollToTop);

// render props 模式为子组件 赋值
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

// 路由组件 控制 一二级路由
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
           <ScrollToTopComponent>
              <Switch>
                {this.props.route.map((route:any, i) =>(
                  <RouteWithSubRoutes key={route.path} {...route}/>
                ))}
              </Switch>
            </ScrollToTopComponent>
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