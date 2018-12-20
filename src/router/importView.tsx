import React from 'react';
import NProgress from 'nprogress'
import Loadable from 'react-loadable';



const _import_views = file => Loadable.Map({
  loader: {
    Component: () => import(`pages/${file}`),
  },
  loading,
  timeout: 8000,
  render(loaded, props: any) {
    const { history, location } = props;
    const Com = loaded.Component.default;
    // NProgress.done();
    return React.createElement(Com, { ...props }, null);
  }
});


/**
 * [ loadingProxy description  策略对象 ]  
*/
const loadingProxy = {
  error(params) {
    return (<p>加载错误...{params.error.message}</p>);
  },
  timedOut(params) {
    return (<div>加载超时...... <button onClick={params.retry}>重试</button></div>);
  },
  pastDelay(){
    
  }
}

const propArr = Reflect.ownKeys(loadingProxy);
let returnEle = null;

const loading = (props) => {
  for (let i = 0; i < propArr.length; i++) {
    if (props[propArr[i]]) {
      return loadingProxy[propArr[i]](props)
    }
  }
  return null;
}

export default _import_views;
