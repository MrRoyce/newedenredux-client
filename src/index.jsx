'use strict';

require("bootstrap-webpack!./bootstrap.config.js");
require('./css/main.css');

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

//const history = createBrowserHistory();

ReactDOM.render(
  <Router>{routes}</Router>,
  document.getElementById('app')
);
