import React from 'react';
import LoginSignUpForm from './components/LoginSignUpForm';
import '../../styles/App.scss'
import '../../styles/LoginSignUp.scss';

import { useEffect } from 'react';
import { Tooltip,Spin  } from 'antd';

import {connect} from 'react-redux';
import * as login_signup_actions from '../../../core/login-signup/action/loginSignupActions';


const LoginSignUp = ({formState, setFormState, loading}) =>  {
  useEffect(() => {
    setFormState(1);
  }, []);

    return (
      <div className="bg-container">
  <div className='box'>
  <div className='wave -one'></div>
  <div className='wave -two'></div>
  <div className='wave -three'></div>
  </div>
  
  <div className="login-form-container">
  <Spin spinning={loading}>
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
  </Spin>
</div>
    </div>
    );
  }

  const mapStateToProps = (state) =>{
    return{
      formState: state.login_signup.formState,
      loading: state.login_signup.loading,
    }
  } 
  const mapDispatchToProps = (dispatch) => {
    return{
      setFormState: (s) => dispatch(login_signup_actions.setFormState(s)),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(LoginSignUp);
