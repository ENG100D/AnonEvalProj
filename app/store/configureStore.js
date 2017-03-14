/* Node Modules */
import * as redux from 'redux';
import reduxPromise from 'redux-promise';

import { reducer as formReducer } from 'redux-form';

export function configure() {

  // Combine all custom reducers
  var reducer = redux.combineReducers({
    form: formReducer
  });

  // Create store with reducers, middleware and chrome dev tool extension
  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(reduxPromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
