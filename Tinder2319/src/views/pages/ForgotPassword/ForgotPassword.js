import React from 'react';
import { Form,Input,Button,Spin,Modal } from 'antd';
import { useState,useEffect,useRef } from 'react';
import '../../styles/App.scss';
import '../../styles/LoginSignUp.scss';
import {connect} from 'react-redux';
import * as forgot_password_actions from '../../../core/forgot-password/action/forgotPasswordAction';
import ResetPasswordSuccess from "./components/ResetPasswordSuccess";
  
import axios from 'axios';

import {LockOutlined} from '@ant-design/icons';

 const CreateProfile = ({uid,token,setInfo,setLoading,loading,setSuccess,success}) => {
  
  useEffect(() => {
    const addressArray = window.location.href.split("/").reverse();
    console.log("uid:",addressArray[1],"\ntoken:",addressArray[0]);
    setInfo(addressArray[1],addressArray[0]);

  },[]);

  const onFinish= (values)=>
  {
    console.log(values);
    setLoading(true);
    axios.post('http://localhost:8000/api/account/auth/users/reset_password_confirm/', {
        "uid": uid,
        "token": token,
        "new_password":values.password,
      }
      )
      .then(res => {
        setSuccess(true);
        setLoading(false);
        //delete info
        // setForgotPasswordModal(true);
        console.log(res);
        console.log(res.data);
      })
      .catch(error =>
      {
        setLoading(false);
        console.log(error);
        if (error.response) {
          
          console.log(error.response);
          if(typeof error.response.data === 'object')
          {
            const msgArray = Object.keys(error.response.data).map((d)=>
            {
              return (error.response.data[d]).join(' ');
            })
            Modal.error({
              content: msgArray.join(' '),
            });
            console.log(msgArray);
          }
          else{
            Modal.error({
              content: error.response.statusText,
            });
          }
          }
           else {
          Modal.error({
            content: error.message,
          });
        } 
      })

    
    // setInfo(addressArray[1],addressArray[0]);
  }

  
    return (
      <div className="bg-container">
  <div className='box'>
  <div className='wave -one'></div>
  <div className='wave -two'></div>
  <div className='wave -three'></div>
  </div>
  
  <div className="forgot-pass-container">
  {
    success? <ResetPasswordSuccess/>
  :
  <Spin spinning={loading}>



  <h1>Reset Your Password</h1>

  <Form
    
      name="form"
      className="forgot-pass-form"
      onFinish={onFinish}
      size="large"
    >
    
    <Form.Item
      validateFirst="true"
        name="password"
        dependencies={['password']}
        rules={[
        {
            required: true,
            message: 'Please input your password!',
        },
      ]}
        >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"/>       
      </Form.Item>
    

      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords do not match!');
            },
          }),
        ]}
        
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Confirm Password"/>
      </Form.Item>

      <Form.Item
      className="form-button"
      >
        <Button type="primary" htmlType="submit" >
        SUBMIT
        </Button>
      </Form.Item>
    </Form>
  
    
    </Spin>}
  </div>
  </div>
    );
  }
  const mapStateToProps = (state) =>{
    
    return{
      uid: state.forgot_password.uid,
      token: state.forgot_password.token,
      loading: state.forgot_password.loading,
      success: state.forgot_password.success,
    }
  } 
  const mapDispatchToProps = (dispatch) => {
    return{
      setInfo : (uid,token) => dispatch(forgot_password_actions.setInfo(uid,token)),
      setLoading : (l) => dispatch(forgot_password_actions.setLoading(l)),
      setSuccess:(s) => dispatch(forgot_password_actions.setSuccess(s)),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(CreateProfile);
