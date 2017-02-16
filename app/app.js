import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';

/* Routes */
import routes from './routes';
/* Store */
import * as conf from 'configureStore';


// Init custom store configuration
var store = conf.configure();

// Render provider and routes to DOM
ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
