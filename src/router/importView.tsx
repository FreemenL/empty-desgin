import React from 'react';
import NProgress from 'nprogress'
import Loadable from 'react-loadable';
// import components from 'components/Prompt';
// import ErrorCom from 'components/ErrorCom';
import { Button } from 'antd';
// import { cookieUtil , Session ,Local} from 'utils/tool';
// const { component:Prompt } = components;


const _import_views = file => Loadable.Map({
  loader: {
    Component: () => import(`pages/${file}`),
  },
  loading,
  timeout: 8000,
  render(loaded, props:any){
    const { history ,location } = props;
    const Com = loaded.Component.default;
    // NProgress.done();
    return  React.createElement(Com, {...props}, null);
  }
});



/**
 * [ loadingProxy description  策略对象 ]  
*/
const loadingProxy = {
	error(params){
		// return (<ErrorCom error={params.error.message} info={params.error.stack}/>);
		return (<p>加载错误...</p>);
	},
	timedOut(params){
		return (<div>加载超时...... <Button onClick={ params.retry }>重试</Button></div>);
	},
	pastDelay(){
		// return Prompt["pLoading"]();
	}
}

const propArr = Reflect.ownKeys(loadingProxy);
let returnEle = null;

const loading = (props) =>{
  for(let i=0;i<propArr.length;i++){
    if(props[propArr[i]]){
       return loadingProxy[propArr[i]](props)
    }
  }
  return null;
}

export default _import_views;
