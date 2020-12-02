import React from 'react';
import { Form, Input, Button, DatePicker  } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { useState,useEffect } from 'react';
import axios from 'axios';
import AvatarModalWindow from './AvatarModalWindow';


import {connect} from 'react-redux';
import * as create_profile_actions from '../../../../core/create-profile/action/createProfileActions';


const CreateProfileForm = ({username,slider, setProfileInfo,setModal}) => 
{
  const [avatarModal, setavatarModal] = useState(false);
  const onFinish = (values) => {
    setProfileInfo(values);
    // console.log(profileInfo);
  };

  
  const test = (e)=>{
    console.log(e)
    console.log(e.format('YYYY/MM/DD'));
  }
  const handleAvatarModalToggle = () =>
  {
    setModal(true);
    setavatarModal(true);
  }
  
  return (
    <div id="profile-form-container">
    <AvatarModalWindow
    visible={avatarModal}
    setvisible={setavatarModal}
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
    initialValue={username}
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
      placeholder="Birth Date" 
          onChange={test}
     
      />
        
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

        onClick={()=>{slider.current.next()}}
        >
        Next
        </Button>
      </Form.Item>
      </Form>   
      </div>

  );
};
const mapStateToProps = (state) =>{
  
  return{
    username: state.login_signup.username,
    slider : state.create_profile.slider,
    profileInfo: state.create_profile.profile_info,
  }
} 
const mapDispatchToProps = (dispatch) => {
  return{
    setInterests : (ints) => dispatch(create_profile_actions.setInterests(ints)),
    setProfileInfo : (values) => dispatch(create_profile_actions.setProfileInfo(values)),
    setModal: (v) => dispatch(create_profile_actions.setModal(v)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CreateProfileForm);