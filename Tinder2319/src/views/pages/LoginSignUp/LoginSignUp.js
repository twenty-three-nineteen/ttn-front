import React from 'react';
import LoginSignUpForm from './components/LoginSignUpForm';
import '../../styles/App.css';
import '../../styles/LoginSignUp.css';

import { Tooltip  } from 'antd';

import {connect} from 'react-redux';
import * as login_signup_actions from '../../../core/login-signup/action/loginSignupActions';

function callback(key) {
  console.log(key);
}

const appName = "app name";

const LoginSignUp = ({formState, setFormState}) =>  {

    return (
      <div className="login-signup-container">
  <div className='box'>
  <div className='wave -one'></div>
  <div className='wave -two'></div>
  <div className='wave -three'></div>
  </div>
  
  <div id="form-container">
  <h1 id="state-row">
  <Tooltip title="Forgot your password?">
  <button
  onClick={()=>setFormState(0)}
  className={(formState==0)? "checked":""}
  >Reset</button>
  </Tooltip>

  <Tooltip title="Already have an account?">
  <button
  onClick={()=>setFormState(1)}
  className={(formState==1)? "checked":""}
  >Login</button>
  </Tooltip>

  
  <Tooltip title="Don't have an account?">
  <button
  onClick={()=>setFormState(2)}
  className={(formState==2)? "checked":""}
  >Sign Up</button>
  </Tooltip>

  </h1>
  <LoginSignUpForm/>
</div>
    </div>
    );
  }

  const mapStateToProps = (state) =>{
    return{
      formState: state.login_signup.formState,
    }
  } 
  const mapDispatchToProps = (dispatch) => {
    return{
      setFormState: (s) => dispatch(login_signup_actions.setFormState(s)),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(LoginSignUp);
