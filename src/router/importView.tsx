import React from 'react';
import NProgress from 'nprogress'
import Loadable from 'react-loadable';
import components from '@components/load-component';

const _import_views = file => Loadable.Map({
  loader: {
    Component: () => import(`@pages/${file}`),
  },
  loading,
  timeout: 8000,
  render(loaded, props: any) {
    const { history, location } = props;
    const Com = loaded.Component.default;
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
    return components.Eloading.component;
  }
}

const propArr = Reflect.ownKeys(loadingProxy);

const loading = (props) => {
  for (let i = 0; i < propArr.length; i++) {
    if (props[propArr[i]]) {
      return loadingProxy[propArr[i]](props)
    }
  }
  return null;
}

export default _import_views;
