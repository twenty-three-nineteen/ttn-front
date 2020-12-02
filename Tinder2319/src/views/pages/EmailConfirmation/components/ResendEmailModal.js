import React from 'react';
import { Modal,message, Button,Form,Input  } from 'antd';

  
import { MailOutlined } from '@ant-design/icons';

import {connect} from 'react-redux';
import * as email_confirmation_actions from '../../../../core/email-confirmation/action/emailConfirmationActions';
import axios from 'axios';

const ResendEmailModal = ({setResendEmailModal,visible,email,setEmail}) => 
{
  const [form] = Form.useForm();
    const handleInput=(e)=>
    {
      setEmail(e.target.value)
    }
    const handleSend=(e)=>
    {
      form.validateFields()
      .then(values=>
        {
          axios.post('http://localhost:8000/api/account/auth/users/resend_activation/', {
            "email": values.email,
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
        })
    }
    
   
    const handleOk = (e) => {
        console.log(e);
        setResendEmailModal(false);
      };

  return (
    
    <Modal
    visible={visible}
    title={
      "Enter your email:"
    }

    footer={[
        <Button key="cancel"  onClick={handleOk}>
        Cancel
      </Button>,
      <Button key="action" type="primary" onClick={handleSend}>
        Resend
      </Button>,
      
    ]}>
    <Form 
    form={form}
      // onFinish={onFinish}
      size="large">
      <Form.Item
        name="email"
        rules={[
          {type: 'email',
            message:'Please enter a valid email!',
          },
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input
        prefix={<MailOutlined className="site-form-item-icon" />}
        placeholder="Email"
        onChange={handleInput}/>
      </Form.Item></Form>
      
      
    </Modal>
      

  );
};

const mapStateToProps = (state) =>{
  
    return{
      visible: state.email_confirmation.modalVisiblity,
      email: state.email_confirmation.email,
    }
  } 
  const mapDispatchToProps = (dispatch) => {
    return{
        setResendEmailModal : (v) => dispatch(email_confirmation_actions.setResendEmailModal(v)),
        setEmail : (e) => dispatch(email_confirmation_actions.setEmail(e)),
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(ResendEmailModal);