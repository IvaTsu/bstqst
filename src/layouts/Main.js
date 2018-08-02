import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Authorization/Login';
import Reginstration from '../pages/Authorization/Reginstration';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/registration" component={Reginstration} />
    </Switch>
  </main>
);

export default Main;
