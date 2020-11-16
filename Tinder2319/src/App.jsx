import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import history from "./core/modules/history";

import "antd/dist/antd.css";
import Profile from "./views/pages/Profile/Profile";
import LoginSignUp from "./views/pages/LoginSignUp";
import Explore from "./views/pages/Explore";

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/LoginSignUp" exact component={LoginSignUp} />
        <Route path="/Profile" exact component={Profile} />
        <Route path="/Explore" exact component={Explore} />
      </Switch>
    </Router>
  );
};

export default App;