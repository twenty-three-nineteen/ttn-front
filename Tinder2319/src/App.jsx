import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import history from "./core/modules/history";

// import "antd/dist/antd.css";
import Profile from "./views/pages/Profile/Profile";
import Posts from "./views/pages/Posts/Posts";
import CreateProfile from "./views/pages/CreateProfile/CreateProfile";
import EmailConfirmation from "./views/pages/EmailConfirmation/EmailConfirmation";
import LoginSignUp from "./views/pages/LoginSignUp/LoginSignUp";
import Explore from "./views/pages/Explore";
import ForgotPassword from "./views/pages/ForgotPassword/ForgotPassword";
import ChatList from "./views/pages/ChatList/ChatList";
import Chat from './views/pages/ChatRoom/Chatroom';
import ProtectedRoute from './core/ProtectedRoute';

import {connect} from 'react-redux';
const App = ({logged_in}) => {
  return (
    <Router history={history}>
      <Switch>

      <Route path="/login_signup" exact component={LoginSignUp} />
      <Route path="/activate/*" exact component={EmailConfirmation} />
      <Route path="/password/reset/confirm/*" exact component={ForgotPassword} />
      <ProtectedRoute exact path='/profile' auth={logged_in} unauthLocation="/login_signup" component={Profile} />
      <ProtectedRoute exact path='/posts' auth={logged_in} unauthLocation="/login_signup" component={Posts} />
      <ProtectedRoute exact path='/create_profile' auth={logged_in} unauthLocation="/login_signup" component={CreateProfile} />
      <ProtectedRoute exact path='/Explore' auth={logged_in} unauthLocation="/login_signup" component={Explore} />
      <ProtectedRoute exact path='/chatList' auth={logged_in} unauthLocation="/login_signup" component={ChatList} />
      <ProtectedRoute exact path='/chat/*' auth={logged_in} unauthLocation="/login_signup" component={Chat} />

      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) =>{
  
  return{
    logged_in: state.login_signup.logged_in,
  }
} 

export default connect(mapStateToProps)(App);