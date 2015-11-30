'use strict';

require("bootstrap-webpack!./bootstrap.config.js");
require('./css/main.css');

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory';
//import { syncReduxAndRouter, routeReducer } from 'redux-simple-router';
import reducers from './reducers/entries';
import { setState } from './action_creators';
import routes from './routes';
import io from 'socket.io-client';
//import { createStore, renderDevTools } from './utils/devTools';  // Create store overridden from redux

//const reducer = combineReducers(reducers);

const socket = io(`${location.protocol}//${location.hostname}:8090`);

const store = createStore(reducers);
const history = createBrowserHistory();

//syncReduxAndRouter(history, store);

socket.on('state', state => {
    store.dispatch(setState(state));
  }
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
