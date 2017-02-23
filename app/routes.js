/* Node Modules */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* Components */
import ClassSelect from 'ClassSelect';
import EvalPage from 'EvalPage';
import Home from 'Home';
import InstrDash from 'InstrDash';
import InstrLogin from 'InstrLogin';
import Main from 'Main';
import StudLogin from 'StudLogin';
import TeammateSelect from 'TeammateSelect';


export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="classes" component={ClassSelect} />
    <Route path="student/evaluation" component={EvalPage} />
    <Route path="instrucor/dashboard" component={InstrDash} />
    <Route path="instructor/login" component={InstrLogin} />
    <Route path="student/login" component={StudLogin} />
    <Route path="student/teammate" component={TeammateSelect} />
  </Route>
);
