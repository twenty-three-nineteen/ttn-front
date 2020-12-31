import React from 'react'
import { useState,useEffect} from 'react';

import { Modal } from 'antd';
import { ClockCircleOutlined,MessageOutlined } from '@ant-design/icons';

const OPModal = ({
    visible, op, date,
    setVisible,

}) => {

    const showModal = () => {
        setVisible(true);
      };
    
      const handleOk = () => {
        setVisible(false);
      };
    
      const handleCancel = () => {
        setVisible(false);
      };

    return(
       
       <Modal
          visible={visible}         
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}         
          width={400}
        >
        
       <div className="chat-info chat-date">
       <ClockCircleOutlined />
       <p>
       Created at {date}
       </p>
       </div>

       <div className="chat-info chat-op">
       <MessageOutlined />
       <p>{op}</p>
       </div>
       
       
       </Modal>
      
    )}
export default OPModal;