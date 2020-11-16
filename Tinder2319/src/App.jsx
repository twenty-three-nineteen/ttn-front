import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import history from "./core/modules/history";

import "antd/dist/antd.css";
import Profile from "./views/pages/Profile/Profile";
import Posts from "./views/pages/Posts/Posts";
import ShowPost from "./views/pages/ShowPost/ShowPost";

import CreateProfile from "./views/pages/CreateProfile/CreateProfile";
import EmailConfirmation from "./views/pages/EmailConfirmation/EmailConfirmation";
import LoginSignUp from "./views/pages/LoginSignUp/LoginSignUp";
import Explore from "./views/pages/Explore";



const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login_signup" exact component={LoginSignUp} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/posts" exact component={Posts} />
        <Route path="/show_post" exact component={ShowPost} />

      <Route path="/activate/*" exact component={EmailConfirmation} />
     
        <Route path="/CreateProfile/*" exact component={CreateProfile} />
       
        <Route path="/Explore" exact component={Explore} />
      </Switch>
    </Router>
  );
};

export default App;