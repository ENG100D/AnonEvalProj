/* Node Modules */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* Components */
import Main from 'Main';



export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Main} />
  </Route>
);
