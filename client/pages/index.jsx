import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Dashboard from './dashboard';
import Login from './login';
import Excercise from './excercise';
import NotFound from './NotFound';

/*
  This component will set up routes inside the main region
*/

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="/missions/:id" component={Excercise} />
      <Route path="*" component={NotFound} />
    </Switch>
  </main>
);

export default Main;
