
import React from 'react';
import { Result, Button, Typography,Modal  } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Avatar from './Avatar';

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
    title="Choose Your Avatar"
    closable={false}
    footer={[
      
      <Button key="ok" type="primary" onClick={handleOk}>
        Ok
      </Button>,
    ]}>
    <Avatar selectedAvatar={props.selectedAvatar} setselectedAvatar={props.setselectedAvatar}/>
      
      
    </Modal>
      

  );
};

export default ModalWindow;

