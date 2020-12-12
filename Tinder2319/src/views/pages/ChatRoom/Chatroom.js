import React from 'react'
import { useState,useEffect} from 'react';
import { Form, Input, Button,Space,notification,message, Card,Modal,Row,Col,Checkbox } from 'antd';
import "../../styles/chatroom"
import avatarArray from '../CreateProfile/components/Avatar';
import PicAndName from "./components/PicAndName"


import {connect} from 'react-redux';
import * as chatroom_actions from '../../../core/chatroom/action/chatroomActions';

const Chatroom = ({

}) => {
    return(
       <div className="mainDivOfChat">
            <PicAndName>vjy</PicAndName>
       </div>
      
    )}
    const mapStateToProps = (state) =>{
    
        return{
          
        }
    } 
      const mapDispatchToProps = (dispatch) => {
        return{
          
          
        }
    }

export default connect(mapStateToProps,mapDispatchToProps)(Chatroom);