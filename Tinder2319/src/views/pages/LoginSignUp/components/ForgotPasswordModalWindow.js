
import React from 'react';
import { Result, Button, Typography,Modal  } from 'antd';

const { Paragraph, Text } = Typography;
const resendEmail=()=>{
  console.log("resend");
}
const ModalWindow = (props) => 
{
    

    
  
    const handleOk = (e) => {
      console.log(e);
      props.setvisible(false);
    };

  return (
    
    <Modal
    visible={props.visible}
    title={props.title}

    footer={[
      <Button key="action">
        Resend Email
      </Button>,
      <Button key="ok" type="primary" onClick={handleOk}>
        Ok
      </Button>,
    ]}>
      Check your email for a verification email.
      Didn't get an email?
      
      
    </Modal>
      

  );
};

export default ModalWindow;

