
import React from 'react';
import { Result, Button, Typography,Modal, message  } from 'antd';

import {connect} from 'react-redux';
import * as login_signup_actions from '../../../../core/login-signup/action/loginSignupActions';

import axios from 'axios';
const ForgotPasswordModalWindow = ({fVisible, setForgotPasswordModal,email}) => 
{
    
    const handleForgotPassword = () =>
    {
      axios.post('http://localhost:8000/api/account/auth/users/reset_password/', {
        "email": email,
      }
      )
      .then(res => {
        // setLoading(false);
        // setForgotPasswordModal(true);
        message.success("Email sent.");
        console.log(res);
        console.log(res.data);
      })
      .catch(error =>
      {
        // setLoading(false);
        console.log(error);
        if (error.response) {
          const msgArray = Object.keys(error.response.data).map((d)=>
          {
            console.log(error.response.data[d]);
            return (error.response.data[d]).join();
          })
          Modal.error({
            content: msgArray.join(' '),
          });
          console.log(msgArray);
        } else {
          Modal.error({
            content: error.message,
          });
        } 
      })
    }
    
  
    const handleOk = (e) => {
      console.log(e);
      setForgotPasswordModal(false);
    };

  return (
    
    <Modal
    visible={fVisible}
    

    footer={[
      <Button key="action" onClick={handleForgotPassword}>
        Resend Email
      </Button>,
      <Button key="ok" type="primary" onClick={handleOk}>
        Ok
      </Button>,
    ]}>
      Check your email for an email.
      Didn't get an email?
      
      
    </Modal>
      

  );
};



const mapStateToProps = (state) =>{
  return{
    email:state.login_signup.email,
    fVisible:state.login_signup.f_visible,
  }
} 
const mapDispatchToProps = (dispatch) => {
  return{
    
    setForgotPasswordModal: (f) => dispatch(login_signup_actions.setForgotPasswordModal(f)),
    

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ForgotPasswordModalWindow);


