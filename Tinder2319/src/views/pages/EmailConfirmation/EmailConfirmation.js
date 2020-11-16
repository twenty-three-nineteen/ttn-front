import React from 'react';
import { useState,useEffect } from 'react';
import EmailConfirmationFail from './components/EmailConfirmationFail';
import EmailConfirmationSuccess from './components/EmailConfirmationSuccess';
import { Spin } from 'antd';
import '../../styles/App.css';
import '../../styles/EmailConfirmation.css';
import axios from 'axios';


import {connect} from 'react-redux';
import * as email_confirmation_actions from '../../../core/email-confirmation/action/emailConfirmationActions';


const EmailConfirmation = ({setInfo, uid, token, verified}) => {

  useEffect(() => {
  //spin doesnt work on  mobile screen
    setspinning(true);
    const addressArray = window.location.href.split("/").reverse();
    console.log(addressArray);
    setInfo(addressArray[1],addressArray[0]);
    // const timer = setTimeout(() => 
    axios.post('http://localhost:8000/api/account/auth/users/activation/', {
      "uid": addressArray[1],
      "token": addressArray[0]
    
    })
    .then(res => {
      setspinning(false);
      setfetch(true);
      console.log(res);
      console.log(res.data);
      setverify(true);
    })
    .catch(error =>
    {
      console.log(error.toJSON());
      if (error.response) {
        console.log('res');
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log('req');
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }

      console.log(error.config);
      setspinning(false);
      setfetch(true);
      
      setverify(false);
    })
    
    
    // , 1000);
    // return () => clearTimeout(timer);
      
  },[]);

  const [verify, setverify] = useState(false)
  const [fetch, setfetch] = useState(false)
  const [spinning, setspinning] = useState(false)
    return (
      <div className="login-signup-container">
  <div className='box'>
  <div className='wave -one'></div>
  <div className='wave -two'></div>
  <div className='wave -three'></div>
  </div>
  <Spin spinning={spinning}>
  <div id="email-confirmation-container">
  <h1>Email Verification</h1>
  {(fetch)?
  (verify)?
    <EmailConfirmationSuccess/>
    :
    <EmailConfirmationFail/>
    :
    undefined
  }
  
 
</div>
</Spin>
    </div>
    );
  }

const mapStateToProps = (state) =>{
  
  return{
    uid: state.email_confirmation.uid,
    token: state.email_confirmation.token,
    verified: state.email_confirmation.verified,
  }
} 
const mapDispatchToProps = (dispatch) => {
  return{
    setInfo : (uid,token) => dispatch(email_confirmation_actions.setInfo(uid,token)),
    setVerified: (v) => dispatch(email_confirmation_actions.setVerified(v)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(EmailConfirmation);
