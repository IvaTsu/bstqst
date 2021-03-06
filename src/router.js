import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  </BrowserRouter>
);
