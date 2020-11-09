import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import history from "./core/modules/history";

import "antd/dist/antd.css";
import Profile from "./views/pages/Profile/Profile";
import LoginSignUp from "./views/pages/LoginSignUp";


const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/LoginSignUp" exact component={LoginSignUp} />
        <Route path="/Profile" exact component={Profile} />
      </Switch>
    </Router>
  );
};

export default App;