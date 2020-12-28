import React from 'react'
import { useState,useEffect,useRef } from 'react';
import {connect} from 'react-redux';
import ChatContainer from './containers/ChatConatiner';
import ConvListContainer from './containers/ConvListContainer';

import { Drawer, Button } from 'antd';
import { CaretRightOutlined} from '@ant-design/icons';
import '../../styles/chat/chat.scss';
import '../../styles/chat/chat-mobile.scss';
import '../../styles/chat/chat-mobile.scss';
import '../../styles/chat/convlist.scss';
import '../../styles/chat/misc.scss';
import '../../styles/chat/userlist.scss';

import * as chat_actions from '../../../core/chat/action/chatActions';
import * as socket_actions from '../../../core/chat/socket/index';

import { useMediaQuery } from 'react-responsive'


const Chatroom = ({sent_to_chat,saveSocket,token,username,messages,
  socketConnected,chatRecieved, addMessage}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 748px)' })
  const [listToggle, setlistToggle] = useState(true);
  const [activeChat, setactiveChat] = useState(0);
  const [send, setsend] = useState(false)
  const [msg, setmsg] = useState(undefined)
  const chatRef = useRef(activeChat);
  useEffect(() => {
    //connect socket
    const s = socket_actions.setupSocket(handleCommand,token);
    socket_actions.waitForSocketConnection(s,handleSocketConnection);
  }, [])

  useEffect(() => {
    if(send)
    {
      if(msg.chatId===activeChat)
      {addMessage(msg);
      console.log(activeChat)}
    }
    return () => {
      setsend(false);
    }
  }, [send])
  
  const handleSocketConnection = (s) =>
  {
    saveSocket(s);
    socketConnected(true)
  }

  useEffect(() => {
    console.log(activeChat)
    
  }, [activeChat])


  const handleCommand =(data,activeChat)=>
  {
    const command = data.command;
    if(command === "messages")
	  {
      console.log(data);
      chatRecieved(data.messages);
      // updateScroll();
    }
    else if(command === "new_message")
    {
      console.log(data);
      setmsg(data.message);
      
      setsend(true);

      // updateScroll();
    }
  }
  
  // function updateScroll(){
  //   messageContainer.current.scrollTop = messageContainer.current.scrollHeight;
  // }

    const handleConvListToggle= (e)=>
    {
      setlistToggle(!listToggle);
      //console.log(e.target)
    }
    return(
      <div className="chat-page">
      
      {isMobile? undefined
        :
        <CaretRightOutlined
        onClick={handleConvListToggle}
        className={listToggle? "list-toggle": "list-toggle rotate"}/>}

     

        <ConvListContainer
        isMobile={isMobile}
        chatRef={chatRef}
        activeChat={activeChat}
        listToggle={listToggle}
        setListToggle={setlistToggle}
        SetActiveChat={setactiveChat}
        />
       
      

      <ChatContainer
      
      isMobile={isMobile}
      chatRef={chatRef}
      activeChat={activeChat}
      listToggle={listToggle}
      SetActiveChat={setactiveChat}
      setListToggle={setlistToggle}
      handleConvListToggle={handleConvListToggle}
      />

      </div>
      
    )}
const mapStateToProps = (state) =>{
    return{
      token: state.login_signup.token,
      username: state.login_signup.username,
      sent_to_chat:state.chat.sent_to_chat,
      messages:state.chat.messages,
    }
    } 
    const mapDispatchToProps = (dispatch) => {
    return{
      saveSocket: (c) => dispatch(chat_actions.saveSocket(c)),
      socketConnected: (c) => dispatch(chat_actions.socketConnected(c)),
      chatRecieved: (c) => dispatch(chat_actions.chatRecieved(c)),
      addMessage: (m) => dispatch(chat_actions.addMessage(m)),
    }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(Chatroom);
