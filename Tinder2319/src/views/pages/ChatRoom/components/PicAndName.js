
import React from 'react';
import { Form, Input, Button,Space,notification,message, Card,Modal,Row,Col,Checkbox  } from 'antd';
import { useState,useEffect } from 'react';
import axios from 'axios';
import avatarArray from '../../CreateProfile/components/Avatar';
// import "../../../styles/chatroom"



import {connect} from 'react-redux';
import * as chatroom_actions from '../../../../core/chatroom/action/chatroomActions';



const PicAndName = ({}) => 
{
  
  return (
    
   <div className="PicAndName">

   </div>

  );
};
const mapStateToProps = (state) =>{
 
  return{
   
  }
} 
const mapDispatchToProps = (dispatch) => {
  return{
   
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PicAndName);

