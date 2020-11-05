import React from 'react';
import { Form, Input, Button,Space,notification,message  } from 'antd';
import { LockOutlined,MailOutlined,} from '@ant-design/icons';
import '../styles/App.css'
import { useState,useEffect } from 'react';
import SignUpForm from './SignUpForm';
import axios from 'axios';

const LoginForm = (props) => 
{
  const axios = require('axios');

  // const axios = require('axios');
  const [forgotPass, setForgotPass] =useState(0);
  const [error, seterror] = useState("");
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    console.log(username);
    if(signup)
    {axios.post('http://localhost:8000/auth/users/', {
      "username": username,
      "first_name": firstname,
      "last_name": "lastname",
      "phone": "09",
      "email": email,
      "password": password,
      "re_password": password
    
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
      message.success('You are signed up successfully!');
    })
    .catch(err =>
    {
      message.error(err.message);
        seterror(err.message);
    })}
    else{
      axios.post('http://localhost:8000/auth/token/login/', {
      
      "password": password,
      "email": email
    
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
      message.success('You are signed in successfully!');
    })
    .catch(error =>
    {
      console.log(error.toJSON());
      if (error.response) {
        console.log('res');
        console.log(error.response.data.non_field_errors[0]);
        message.error(error.response.data.non_field_errors[0])
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log('req');
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }

      console.log(error.config);

    })
    }
      
  };

  const handleForgotPassword=(e)=>{
    console.log(email);

    axios.post('http://localhost:8000/auth/users/reset_password_confirm/', {
      "email": email
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
      message.info('An email is sent to '+{email});
    })
    .catch(err =>
    {  
      message.error(err.message);
    })

    
  }

  const handleSignUp=(e)=>
  {
    console.log(form);
    setsignup(!signup);
    onReset();

    console.log(props.form);
  }
  const [signup, setsignup] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [username, setusername] = useState("")
  const [firstname, setfirstname] = useState("")
  const forgotPasswordNotif = () => {
    notification['info']({
      message: 'An email is on the way!',
      duration:0
        });
  };


  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };

  return (
    <div>
    <Form
    form={form}
      name="login"
      className="login-form"
      preserve='false'
      onFinish={onFinish}
    >
      <Form.Item
      initialValue={email}
        name="email"
        rules={[
          {
            type: 'email',
            message: '',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" 
        onChange={(e)=>setemail(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        dependencies={['password']}
        min={({signup})&&'8'}
        initialValue = {password}
        rules={[
          {
            min:8,
            required: true,
            
          },
          
        ]}
        >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          onChange={(e)=>setpassword(e.target.value)}
        />
      </Form.Item>


      <SignUpForm signupState={signup} setusername={setusername} setfirstname={setfirstname}/>


      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
        {!(signup) && "Log In"}
        {(signup) && "Sign Up"}
        </Button>
      </Form.Item>
      </Form>
    
    

      {!(signup) && (<div className="buttons-col">
        <a className="login-form-forgot" onClick={handleForgotPassword} >Forgot Password?</a>
        <a className="login-form-forgot" onClick={handleSignUp} >Don't have an account? Sign Up!</a>
        </div>)}
      {(signup) && (<div className="buttons-col">
        <a className="login-form-forgot" onClick={handleSignUp} >Already have an account? Log In!</a>
        </div>)}
      </div>

  );
};

export default LoginForm;