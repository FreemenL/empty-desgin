import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';

import  Routes from '@router/router';
import store, { history } from '@store/store';
import performance from '@utils/performance.ts';

import "normalize.css";
import "animate.css";

const App = {
	run: function (Component) {		
		performance.init((perfData) => {
			
		});
		render(
			<Provider store={store}>
				<LocaleProvider locale={zh_CN}>
					<ConnectedRouter history={history}>
						<Component />
					</ConnectedRouter>
				</LocaleProvider>
			</Provider>,
			document.getElementById('root') as HTMLElement
		);
	}
}

App.run(Routes);



