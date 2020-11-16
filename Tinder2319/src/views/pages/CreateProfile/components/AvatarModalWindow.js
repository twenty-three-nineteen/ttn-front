
import React from 'react';
import { Result, Button, Typography,Modal  } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { useState,useEffect } from 'react';
import axios from 'axios';
import avatarArray from './Avatar';


import {connect} from 'react-redux';
import * as create_profile_actions from '../../../../core/create-profile/action/createProfileActions';



const ModalWindow = ({setAvatar, avatar, visible,setModal}) => 
{
  const onValueChange = (event) => {
    // props.setselectedAvatar(event.target.value);
    setAvatar(event.target.value);
  }
    const handleOk = (e) => {
      // console.log(e);
      setModal(false);
    };

    const findKey=(value)=>
    {
      // console.log(value.split('.')[0]);
      return value.split('.')[0];
    }

    const AvatarsImages = avatarArray.map(

      (av) =>
      {
        return(
          <div className="radio">
          <label>
            <input
              type="radio"
              value={findKey(av)}
              checked={avatar === findKey(av)}
              onChange={onValueChange}
            />
            <img src={av} />
          </label>
        </div>
        )
      }
    )

  return (
    
    <Modal
    visible={visible}
    title="Choose Your Avatar"
    closable={false}
    footer={[
      
      <Button key="ok" type="primary" onClick={handleOk}>
        Ok
      </Button>,
    ]}>
    <div className="modal-container">
    <div
    className="avatar-container">

    {AvatarsImages}



    </div>
      </div>
      
      
    </Modal>
      

  );
};
const mapStateToProps = (state) =>{
  console.log("state : ",state);
  return{
    avatar : state.create_profile.avatar,
    visible: state.create_profile.visible,
  }
} 
const mapDispatchToProps = (dispatch) => {
  return{
    setAvatar : (av) => dispatch(create_profile_actions.setAvatar(av)),
    setModal : (v) => dispatch(create_profile_actions.setModal(v)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(ModalWindow);

