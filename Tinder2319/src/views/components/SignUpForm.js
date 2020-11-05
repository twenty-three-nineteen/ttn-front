import React from 'react';
import { Form, Input, Button, Tabs, message,Space,notification,Checkbox  } from 'antd';
import { UserOutlined, LockOutlined,MailOutlined } from '@ant-design/icons';
import '../styles/App.css'
import { useState,useEffect } from 'react';
const SignUpForm = (props) => {
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };
    useEffect(
      () => {
        return () => {
          console.log(props)
          document.getElementById("signUp-container").querySelectorAll("input").forEach(
            input => (input.value = "")
          );
          
        };
      },
      [props.signupState],
    );

    
  
    return (
        <div 
        id="signUp-container"
        className={  (props.signupState ? 'signUp-container-active ' : 'signUp-container-non') }
        
        >
        <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: props.signupState,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
        
      >
        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />}
        type="password"
        placeholder="Confirm Password"/>
      </Form.Item>
      <Form.Item
          name="firstname"
          rules={[
            {
              required: props.signupState,
              message: 'Please input your Firstname!',
              whitespace: true,
            },
          ]}
          
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} 
          placeholder="Firstname" onChange={(e)=>props.setfirstname(e.target.value)}/>
        </Form.Item>
        <Form.Item
          name="lastname"
          rules={[
            {
              required: props.signupState,
              message: 'Please input your Lastname!',
              whitespace: true,
            },
          ]}
          
          >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} 
          placeholder="Lastname" />
        </Form.Item>

      
  
        
  
        
  
        <Form.Item
          name="username"
          rules={[
            {
              required: props.signupState,
              message: 'Please input your Username!',
              whitespace: true,
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} 
          placeholder="Username" onChange={(e)=>props.setusername(e.target.value)}/>
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
              {
                if(!props.signupState)
                  {
                    return Promise.resolve()
                  }
                  return (value ?  Promise.resolve() : Promise.reject('Should accept agreement'));
              }
            },
          ]}>
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>

        </div>
    //   </Form>
    );
  };
  
  export default SignUpForm;