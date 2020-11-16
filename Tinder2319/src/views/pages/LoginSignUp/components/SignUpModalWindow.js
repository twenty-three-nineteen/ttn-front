
import React from 'react';
import { Result, Button, Typography,Modal,message  } from 'antd';

import * as login_signup_actions from '../../../../core/login-signup/action/loginSignupActions';

import axios from 'axios';
import {connect} from 'react-redux';
const resendEmail=()=>{
  console.log("resend");
}
const ModalWindow = ({visible, signUpSuccess, setSignUpModal}) => 
{
    

    const resendEmail=()=>
    {
      axios.post('http://localhost:8000/api/account/auth/users/resend_activation/', {
        "email": email,
      })
      .then(res => {
        message.success({
          content: 'Verification email sent.',
        });
        console.log(res);
        console.log(res.data);
        
      })
      .catch(err =>
      {
        console.log(err);
        message.error({
          content: err.message,
        });}
      )
      
      }
  
    const handleOk = (e) => {
      console.log(e);
      // props.setvisible(false);
      setSignUpModal(false);
    };

  return (
    
    <Modal
    visible={visible}
    title={
      "Signed Up Successfully!"
    }

    footer={[
      <Button key="action" onClick={resendEmail}>
        Resend Email
      </Button>,
      <Button key="ok" type="primary" onClick={handleOk}>
        Ok
      </Button>,
    ]}>
      Check your email to verify your account.
      Didn't get an email?
      
      
    </Modal>
      

  );
};

const mapStateToProps = (state) =>{
  return{
    signUpSuccess: state.login_signup.signup_success,
    visible: state.login_signup.s_visible,
    email: state.login_signup.email,
  }
} 
const mapDispatchToProps = (dispatch) => {
  return{
    setSignUpModal: (s) => dispatch(login_signup_actions.setSignUpModal(s)),

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalWindow);

