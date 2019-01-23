import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import  Routes from '@router/router';
import store, { history } from '@store/store';

import "./app.less";
import "normalize.css";
import "animate.css"

const App = {
	run: function (Component) {
		render(
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<Component />
				</ConnectedRouter>
			</Provider>,
			document.getElementById('root') as HTMLElement
		)
	}
}

App.run(Routes);



// import React,{Component} from 'react';
// import NProgress from 'nprogress';
// import ReactDOM from 'react-dom';
// import childRoutes from '@pages/load-child-routes';
// import { Prompt } from 'react-router';
// import getConfirmation from '@components/getConfirmation';
// import { HashRouter as Router, Route, Switch ,Redirect} from 'react-router-dom';


// const RouteWithSubRoutes = (route) =>{
//   return(
//   <Route  path={route.path} render={props =>{ 
//     return(
//       <route.component  jump={props.history.push} params={props.match.params} {...props}/>
//   )}}/>

// )}
// // 路由配置
// const template = ["/login",'/'];
// const transRoute:Array<any> = [];

// childRoutes.forEach((route:any)=>{
//   template.forEach((tem)=>{
//     if(route.path ===   tem ){
//       transRoute.unshift(route)
//     }
//   })
// })

// console.log(transRoute);

// class ChildRoute extends Component<any,any>{
//   static getDerivedStateFromProps(nextProps,prevState){
//     NProgress.start();
//     return null
//   }
//   constructor(props){
//     super(props);
//     this.state={};
//     NProgress.start();
//   }

//   render() {
//     console.log("render");
//     return (
//       <Switch>
//       {this.props.route.map((route:any, i) =>(
//           <RouteWithSubRoutes key={route.path} {...route}/>
//         ))}
//       </Switch>
//     )
//   }
// }

// class MainRoute extends Component{
//   render(){
//     return (
//       <Router  getUserConfirmation={getConfirmation("comfirm")}>
//             <Switch>
//               {transRoute.map((route:any, i) =>(
//                 <RouteWithSubRoutes key={route.path} {...route}/>
//               ))}
//             </Switch>
//       </Router>
//     )
//   }
// }

// export {
//   MainRoute,
//   ChildRoute
// };