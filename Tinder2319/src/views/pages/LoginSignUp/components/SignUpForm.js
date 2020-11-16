import React from 'react';
import { Form, Input  } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import {connect} from 'react-redux';
const SignUpForm = ({formState}) => {
  
    return (
        <div 
        id="signUp-container"
        className={  ((formState>1) ? 'signUp-container-active ' : 'signUp-container-non') } 
        >
        <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: (formState>1),
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
          name="username"
          rules={[
            {
              required: (formState>1),
              message: 'Please input your Username!',
              whitespace: true,
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} 
          placeholder="Username"/>
        </Form.Item>


        </div>
    );
  };
  
  const mapStateToProps = (state) =>{
    return{
      formState: state.login_signup.formState,
    }
  } 
  const mapDispatchToProps = (dispatch) => {
    return{
      
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm);