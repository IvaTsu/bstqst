import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/Authorization/Login';
import Reginstration from '../pages/Authorization/Reginstration';
import ResetPassword from '../pages/Authorization/ResetPassword/index';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/registration" component={Reginstration} />
      <Route path="/reset-password" component={ResetPassword} />
    </Switch>
  </main>
);

export default Main;
