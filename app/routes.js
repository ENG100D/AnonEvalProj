/* Node Modules */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

/* Components */
import ClassSelect from 'ClassSelect';
import Home from 'Home';
import InstrDash from 'InstrDash';
import InstrLogin from 'InstrLogin';
import Main from 'Main';
import StudLogin from 'StudLogin';
import TeammateSelect from 'TeammateSelect';
import TeamSelect from 'TeamSelect'
import ResponseReview from 'ResponseReview';
import ResponseDash from 'ResponseDash';
import Forms from 'Forms';

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={Home} />
    <Route path="classes" component={ClassSelect} />
    <Route path="instructor/dashboard" component={InstrDash} />
    <Route path="instructor/login" component={InstrLogin} />
    <Route path="student/login" component={StudLogin} />
    <Route path="student/teammate" component={TeammateSelect} />
    <Route path="instructor/team" component={TeamSelect} />
    <Route path="instructor/class" component={ClassSelect} />
    <Route path="student/ResponseDash" component={ResponseDash} />
    <Route path="student/ResponseReview" component={ResponseReview} />
    <Route path="student/forms" component={Forms} />

  </Route>
);
