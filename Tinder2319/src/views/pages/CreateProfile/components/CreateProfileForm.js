import React from 'react';
import { Form, Input, Button, DatePicker  } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { useState,useEffect } from 'react';
import axios from 'axios';
import AvatarModalWindow from './AvatarModalWindow';
const CreateProfileForm = (props) => 
{
  const [selectedAvatar, setselectedAvatar] = useState("1");
  const [avatarModal, setavatarModal] = useState(false);
  const onFinish = (values) => {
    console.log(values);
    console.log(selectedAvatar);
      
  };

  const handleAvatarModalToggle = () =>
  {
    setavatarModal(true);
  }
  
  return (
    <div id="profile-form-container">
    <AvatarModalWindow
    visible={avatarModal}
    setvisible={setavatarModal}
    selectedAvatar={selectedAvatar}
    setselectedAvatar={setselectedAvatar}
    />

  
    <Form      
      name="create-profile"
      className="profile-form"
      preserve='false'
      onFinish={onFinish}
      
      size="large"
    >
    <Form.Item
    style={{margin:"0 0 10px 0"}}>
    <Form.Item
          name="nickname"
          rules={[
            {
              max:10,             
              whitespace: true,
            },
          ]}
          style={{width:"calc(55% - 10px)",display:"inline-block",margin:"0"}}>
          <Input 
          placeholder="Nickame"/>
        </Form.Item>

        
        <Form.Item
        name="birth"       
      style={{width:"45%",display:"inline-block",margin:"0 0 0 10px"}}
      >
      <DatePicker 
      placeholder="Birth Date" />
        
      </Form.Item>


        </Form.Item>


        <Form.Item
        name="bio"
        style={{margin:"0 0 10px 0"}}
        >
        <Input.TextArea
        allowClear="true"
        showCount
        maxLength={100} 
        
        placeholder="Bio"
        />
        </Form.Item>





        <Form.Item
        name="avatar-radio"
        
        
        >
        <Button type="primary" className="avatar-form-button" onClick={handleAvatarModalToggle}>
        Choose Your Avatar
        </Button>
        
      </Form.Item>

      <Form.Item
      style={{margin:"24px 0 0 0"}}
      >
        <Button
        type="primary"
        htmlType="submit"
        className="next-form-button"

        onClick={()=>{props.slider.current.next()}}
        >
        Next
        </Button>
      </Form.Item>
      </Form>
    
    

      
      </div>

  );
};

export default CreateProfileForm;