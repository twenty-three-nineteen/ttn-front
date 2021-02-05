import React from 'react'
import { useState,useEffect,useRef } from 'react';
import {connect} from 'react-redux';
import ChatContainer from './containers/ChatConatiner';
import ConvListContainer from './containers/ConvListContainer';

import { CaretRightOutlined} from '@ant-design/icons';
import '../../styles/chat/chat.scss';
import '../../styles/chat/chat-mobile.scss';
import '../../styles/chat/chat-mobile.scss';
import '../../styles/chat/convlist.scss';
import '../../styles/chat/misc.scss';
import '../../styles/chat/userlist.scss';

import * as chat_actions from '../../../core/chat/action/chatActions';
import * as socket_actions from '../../../core/chat/socket/index';
import Toolbar from "../../components/Menu.js";
import { useMediaQuery } from 'react-responsive';
import SideMenu from "../../components/SlideMeny/SideMenu.js";


const Chatroom = ({sent_to_chat,saveSocket,token,username,messages,
  socketConnected,chatRecieved, addMessage}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 748px)' })
  const [listToggle, setlistToggle] = useState(true);
  const [activeChat, setactiveChat] = useState(0);
  const [send, setsend] = useState(false)
  const [msg, setmsg] = useState(undefined)
  const [update, setupdate] = useState(false)

  const chatRef = useRef(activeChat);
  useEffect(() => {
    //connect socket
    const s = socket_actions.setupSocket(handleCommand,token);
    socket_actions.waitForSocketConnection(s,handleSocketConnection);
  }, [])

  useEffect(() => {
    if(send && msg)
    {
      if(msg.chatId===activeChat)
      {
        addMessage(msg);
        console.log(activeChat)
      }
    }
    return () => {
      setsend(false);
      setmsg(undefined);
    }
  }, [send])

  useEffect(() => {
    if(update && msg)
    {
      if(msg.chatId===activeChat)
      {
        console.log(msg.username + " " + msg.cmd + " the chat.");
        addMessage(
          {
            content: msg.username + " " + msg.cmd + " the chat.",
          }
        );
        
      }
    }
    return () => {
      setupdate(false);
      setmsg(undefined);
    }
  }, [update])
  
  const handleSocketConnection = (s) =>
  {
    saveSocket(s);
    socketConnected(true)
  }


  const handleCommand =(data,activeChat)=>
  {
    const command = data.command;
    if(command === "messages")
	  {
      console.log(data);
      chatRecieved(data.messages);
    }
    else if(command === "new_message")
    {
      console.log(data);
      setmsg(data.message);
      setsend(true);
    }

    else if(command === "join_the_group")
    {
      console.log(data);
      setmsg({
        ...data.message,
        cmd: "joined",
      });
      setupdate(true);
      //update conv list
      //update header
    }
    else if(command === "left_the_group")
    {
      console.log(data);
      setmsg({
        ...data.message,
        cmd: "left",
      });
      setupdate(true);
    }
  }


    const handleConvListToggle= (e)=>
    {
      setlistToggle(!listToggle);
    }

    return(
      <div className="chat-page">
      <Toolbar></Toolbar>
      <div className="TopBar">
        <p className="TeamName">2319</p>
      </div>

      {isMobile? undefined
        :
        <CaretRightOutlined
        onClick={handleConvListToggle}
        className={listToggle? "list-toggle": "list-toggle rotate"}/>}

        <ConvListContainer
        update={update}
        isMobile={isMobile}
        chatRef={chatRef}
        activeChat={activeChat}
        listToggle={listToggle}
        setListToggle={setlistToggle}
        SetActiveChat={setactiveChat}
        />
       
      

      <ChatContainer
      update={update}
      setupdate={setupdate}
      setActiveChat={setactiveChat}
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
