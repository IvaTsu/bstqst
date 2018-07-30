import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login/Login";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/login" component={Login} />
    </Switch>
  </main>
);

export default Main;
