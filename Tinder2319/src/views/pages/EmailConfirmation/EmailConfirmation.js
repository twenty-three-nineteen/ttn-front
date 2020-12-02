import React from 'react';
import { useState,useEffect } from 'react';
import EmailConfirmationFail from './components/EmailConfirmationFail';
import EmailConfirmationSuccess from './components/EmailConfirmationSuccess';
import { Spin } from 'antd';
import '../../styles/App.scss';
import '../../styles/scss/styles.scss';
import '../../styles/EmailConfirmation.scss';
import axios from 'axios';


import {connect} from 'react-redux';
import * as email_confirmation_actions from '../../../core/email-confirmation/action/emailConfirmationActions';
import * as login_signup_actions from '../../../core/login-signup/action/loginSignupActions';



const EmailConfirmation = ({loading, uid, token, verified,setLoading,
  setInfo,setVerified,setErrorMassege,setLoginState,setToken,setUsername}) => {
    const getUser = (token) =>
    {
      axios.get('http://localhost:8000/api/account/auth/users/me/',
      {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type':'application/json',
        }
     })
  
  
      .then(function (response) {
        console.log(response);
        setUsername(response.data.username);
      })
      .catch(error =>
        {
          console.log(error);
          if (error.response) {
            console.log('res');
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else {
            console.log(error.message);
          } })
    }


  useEffect(() => {
    const addressArray = window.location.href.split("/").reverse();
    console.log(addressArray);
    // setInfo(addressArray[1],addressArray[0]);
    const timer = setTimeout(() => 
    {
      axios.post('http://localhost:8000/api/account/auth/users/activation/', {
      "uid": addressArray[1],
      "token": addressArray[0]
    
    })
    .then(res => {
      setLoginState(true);
      // setToken();
      // getUser(res.data.auth_token);
      setInfo(undefined,undefined);
      setLoading(false);
      setVerified(true);
      console.log(res);
      console.log(res.data);
      
    })
    .catch(error =>
    {
      setInfo(undefined,undefined);
      // console.log(error.toJSON());
      if (error.response) {
      //   console.log('res');

      //   const msgArray = Object.keys(error.response.data).map((d)=>
      //   {
      //     console.log(error.response.data[d]);
      //     return (error.response.data[d]).join();
      //   })
        
      //    setErrorMassege(msgArray.join(' '));
      setErrorMassege(error.response.data.detail);
        console.log(error.response.data.detail);
      //   console.log(error.response.status);
      //   console.log(error.response.headers);
      } else {
        setErrorMassege(error.message);
        console.log('Error', error.message);
      }
      setLoading(false);
      setVerified(false);
      
    })

    }
    , 10);
    return () => clearTimeout(timer);
    
      
  },[]);

    return (
      <div className="bg-container ">
  <div className='box'>
  <div className='wave -one'></div>
  <div className='wave -two'></div>
  <div className='wave -three'></div>
  </div>
  
  <div className="email-confirmation-container">
  <Spin spinning={loading}>
  <h1>Email Verification</h1>
  {(!loading)?
  (verified)?
    <EmailConfirmationSuccess/>
    :
    <EmailConfirmationFail/>
    :
    undefined
  }
  
  </Spin>
</div>

    </div>
    );
  }

const mapStateToProps = (state) =>{
  
  return{
    uid: state.email_confirmation.uid,
    token: state.email_confirmation.token,
    verified: state.email_confirmation.verified,
    loading: state.email_confirmation.loading,
  }
} 
const mapDispatchToProps = (dispatch) => {
  return{
    setInfo : (uid,token) => dispatch(email_confirmation_actions.setInfo(uid,token)),
    setVerified: (v) => dispatch(email_confirmation_actions.setVerifiedState(v)),
    setLoading: (l) => dispatch(email_confirmation_actions.setLoading(l)),
    setErrorMassege: (e) => dispatch(email_confirmation_actions.setErrorMassege(e)),

    setUsername: (u) => dispatch(login_signup_actions.setUsername(u)),
    
    setLoginState:(f) => dispatch(login_signup_actions.setLoginState(f)),
    setToken: (l) => dispatch(login_signup_actions.setToken(l)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmailConfirmation);
