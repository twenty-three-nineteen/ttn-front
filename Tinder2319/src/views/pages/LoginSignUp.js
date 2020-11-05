import React from 'react';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import { Tabs,Menu,Popover, Button } from 'antd';
import '../styles/App.css';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
const content = (
  <LoginForm/>
);
const appName = "app name";

export default class LoginSignUp extends React.Component {
  render() {
    return (
      <div className="login-signup-container">
  <div className='box'>
  <div className='wave -one'></div>
  <div className='wave -two'></div>
  <div className='wave -three'></div>
  </div>
  
  <div id="form-container">
  <h1>{appName}</h1>
  <LoginForm/>
 
</div>

    </div>
    );
  }
}