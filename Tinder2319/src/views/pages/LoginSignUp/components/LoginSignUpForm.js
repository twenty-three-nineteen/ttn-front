import React from 'react';
import { Spin,Form, Input, Button,message,Modal  } from 'antd';
import { LockOutlined,MailOutlined,ExclamationCircleFilled,InfoCircleOutlined,QuestionOutlined,InfoFilled} from '@ant-design/icons';

import { useState,useEffect } from 'react';
import SignUpForm from './SignUpForm';
import axios from 'axios';
import SignUpModal from './SignUpModalWindow';
import ForgotPasswordModal from './ForgotPasswordModalWindow';
import {connect} from 'react-redux';
import * as login_signup_actions from '../../../../core/login-signup/action/loginSignupActions';


const LoginForm = ({formState, username, email, password, loading,
   setEmail,setPassword,setUsername,setLoading, setForgotPasswordModal, setSignUpModal,setToken
  }) => 
{
  const [passReq, setpassReq] = useState(false)
  
  useEffect(() => {
    // setLoading(true)
    const timer = setTimeout(() => setpassReq(true), 10);
    return () => clearTimeout(timer);
  }, []);

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    setEmail(values.email);
    setLoading(true);
    
    if(formState === 0)
    {
      // forgot-password
      // axios.post('http://localhost:8000/api/account/auth/users/reset_password/', {
      //   "email": values.email,
      // },
      // {'Content-Type':'application/json'}
      // )
      // .then(res => {
      //   setLoading(false);
      //   // setForgotPasswordModal(true);
      //   console.log(res);
      //   console.log(res.data);
      // })
      // .catch(error =>
      // {
      //   setLoading(false);
      //   console.log(error);
      //   if (error.response) {
      //     const msgArray = Object.keys(error.response.data).map((d)=>
      //     {
      //       console.log(error.response.data[d]);
      //       return (error.response.data[d]).join();
      //     })
      //     Modal.error({
      //       content: msgArray.join(' '),
      //     });
      //     console.log(msgArray);
      //   } else {
      //     Modal.error({
      //       content: error.message,
      //     });
      //   } 
      // })

    }
    else if(formState === 1)
    {
      //login
      
      setPassword(values.password);
      axios.post('http://localhost:8000/api/account/auth/token/login/', {
        "password": values.password,
        "email": values.email,
      },
      {'Content-Type':'application/json'}
      )
      .then(res => {
        setLoading(false);
        message.success({
          content: 'Welcome!',
        });
        console.log(res);
        console.log(res.data);
        setToken(res.data.auth_token);
      })
      .catch(error =>
      {
        setLoading(false);
       
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
    else if(formState === 2)
    {
      setPassword(values.password);
      setUsername(values.username);
      
    axios.post('http://localhost:8000/api/account/auth/users/', {
      "email": values.email,
      "password": values.password,
      "re_password": values.password,
      "username": values.username,
    },
    {'Content-Type':'application/json'}
    )
    .then(res => {
      setLoading(false);
      setSignUpModal(true);

      // Modal.success({
        // content: 'You are signed up successfully! Please check your email to verify your account.',
      // });
      console.log(res);
      console.log(res.data);
      
    })
    .catch(error =>
    {
      setLoading(false);
      
      console.log(error);
      // Modal.error({
        // content: error.message,
      // });
      // console.log(error.toJSON());
      if (error.response) {
        // console.log('res');
        // console.log(Object.keys(error.response.data));
        // error.response.data.keys
        // for (var i = 0; i < error.response.data.length; i++) {
          // erMsg+= error.response.data[i];
        // }
        // console.log(erMsg);
        // let msg = "";
        const msgArray = Object.keys(error.response.data).map((d)=>
        {
          console.log(error.response.data[d]);
          return (error.response.data[d]).join();
        })
        Modal.error({
          content: msgArray.join(' '),
        });
        console.log(msgArray);
        // message.error(error.response.data.non_field_errors[0])
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else {
        Modal.error({
          content: error.message,
        });
      } 
    })
      
    }  
  };

  useEffect(() => {
    
    if(formState < 2)
      {form.resetFields(['username','confirm']);}
    if(formState == 0)
    {
      setpassReq(false);
      form.resetFields(['password']);
      console.log(form.getFieldError('password'));
    }
  }, [formState])


  const [visible, setvisible] = useState(false);
  const [modalTitle, setmodalTitle] = useState("");
  const [form] = Form.useForm();

  return (
    <div>
    <SignUpModal/>
    <ForgotPasswordModal/>
    <Spin spinning={loading}>
    <Form
    form={form}
      name="form"
      className="login-form"
      // preserve='false'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      
      size="large"
    >

      <Form.Item
        name="email"
        rules={[
          {type: 'email',
            message:'Please enter a valid E-mail',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
      </Form.Item>

      <div id="pass-container"
      className={  ((formState>0) ? 'pass-container-active ' : 'pass-container-non') } >
      <Form.Item
      validateFirst="true"
        name="password"
        dependencies={['password']}
        rules={[
        {
            required: passReq,
            message: 'Please input your password!',
        },
      ]}
        
        >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"/>       
      </Form.Item>
      </div>
      <SignUpForm/>

      <Form.Item
      className="form-button"
      >
        <Button type="primary" htmlType="submit" >
        SUBMIT
        </Button>
      </Form.Item>
      </Form>
      </Spin>
    
      </div>

  );
};


const mapStateToProps = (state) =>{
  return{
    formState: state.login_signup.formState,
    username: state.login_signup.username,
    email: state.login_signup.email,
    password: state.login_signup.password,
    forgotPasswordToggle: state.login_signup.forgotPasswordToggle,
    loading: state.login_signup.loading,
    sVisible:state.login_signup.s_visible,
    fVisible:state.login_signup.f_visible,
  }
} 
const mapDispatchToProps = (dispatch) => {
  return{
    setUsername: (u) => dispatch(login_signup_actions.setUsername(u)),
    setPassword: (p) => dispatch(login_signup_actions.setPassword(p)),
    setEmail: (e) => dispatch(login_signup_actions.setEmail(e)),
    setLoading: (l) => dispatch(login_signup_actions.setLoading(l)),
    setToken: (l) => dispatch(login_signup_actions.setToken(l)),
    setSignUpModal: (s) => dispatch(login_signup_actions.setSignUpModal(s)),
    setForgotPasswordModal: (f) => dispatch(login_signup_actions.setForgotPasswordModal(f)),
    setSignUpSuccess:(f) => dispatch(login_signup_actions.setSignUpState(f)),
    setLoginSuccess:(f) => dispatch(login_signup_actions.setLoginState(f)),
    setForgotPassSuccess:(f) => dispatch(login_signup_actions.setForgotPassState(f)),

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm);