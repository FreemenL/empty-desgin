import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router-dom';
import Routes from '@router/router';
import store, { history } from '@store/store';

import './app.less';
import "normalize.css";

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

