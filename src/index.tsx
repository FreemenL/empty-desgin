import React,{ Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route ,Switch ,Redirect} from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import Routes from '@router/router';
import store,{ history } from '@store/store';

import styles from './app.less'
import "normalize.css"

const App = {
	run:function(Component){
	   render(
	    <Provider store={store}>
		       <div className={styles.test}>qwe</div>
				<ConnectedRouter history={history}> 
					<LocaleProvider locale={zh_CN}>
			  			<Component/>
					</LocaleProvider>
		  	</ConnectedRouter>
		  </Provider>, 
		document.getElementById('root') as HTMLElement
	  )
	}
}

App.run(Routes);
