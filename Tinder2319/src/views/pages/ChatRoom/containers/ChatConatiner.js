import React from 'react'
import { useState,useEffect,useRef } from 'react';
import { Form, Input, Button, Popover } from 'antd';

import { SendOutlined,SmileOutlined,InfoCircleFilled,TeamOutlined,CaretRightOutlined } from '@ant-design/icons';
import moment from 'moment';
import avatarArray from '../../CreateProfile/components/Avatar';
import Message from '../components/Message';
import User from '../components/User';
import Emojis from './Emoji';
import {connect} from 'react-redux';
import * as chat_actions from '../../../../core/chat/action/chatActions';

import ChatHeader from './ChatHeader';
import UserList from './UserList';

const ChatContainer = ({socket,username, messages,token, users,usersParsed, usersState, chatState,
  activeChat,isMobile,listToggle, date,op,
    getChat,sendMessage,getChatInfo,handleConvListToggle,addMessage,sentToChat,
   }) => {
     const [userList, setuserList] = useState(false);
    const [newMsgScroll, setnewMsgScroll] = useState(true);
    let messagesClasses = document.getElementsByClassName("message");
    const loader = useRef(null);
    const messageContainer = useRef(null);

    useEffect(() => {
        if(activeChat)
        {
          setuserList(false);
          getChat(socket, activeChat);
          getChatInfo(activeChat,token);
          console.log(activeChat)
        }
    }, [activeChat])

  function updateScroll(){
    messageContainer.current.scrollTop = messageContainer.current.scrollHeight;
  }

  
  
  // const handleObserver = (entities) => {
  //   const target = entities[0];
  //   if (target.isIntersecting) { 
  //     let before = messageContainer.current.scrollHeight;
  //     // lastChatRecieved();
  //     let after = messageContainer.current.scrollHeight;
  //     messageContainer.current.scrollTop = after - before;
  //   }
  // }

  const [form] = Form.useForm();

  const sendChat = (values) =>
  {
   if(values.msg)
   {
     sentToChat(activeChat);
    sendMessage(
        socket,values.msg,activeChat
      );
      form.resetFields(['msg']);
   }
  }
  const addEmoji = (e)=>
  {
    let text = form.getFieldValue(['msg']);
    if(text)
    {
      form.setFieldsValue(
        {
          ['msg']:text+e,
        }
      )
    }
    else
    {
      form.setFieldsValue(
        {
          ['msg']:e,
        }
      )
    }
    
  }

  const parseDate = (date)=>
  {
    var m = moment(date);
    return m.format("MMM Do, HH:mm")
  }

  const handleUserList = () =>
  {
    setuserList(!userList);
  }

  useEffect(() => {
    if(activeChat)
      updateScroll();
  }, [messages])

    return(
      
        (activeChat)?
      
       <div className="chat-container chat">
       
         
       
      <ChatHeader
      isMobile={isMobile}
      users={users}
      username={username}
      userList={userList}
      date={parseDate(date)}
      op={op}
      handleUserList={handleUserList}
      handleConvListToggle={handleConvListToggle}
      />
       
        
       <div className="chat-body">
       {
        (users.length > 2)?
        <UserList
        users={users}
        visible={userList}
        setVisible={setuserList}
        username={username}
        />
        :
        undefined
      }
       <div ref={messageContainer} className="message-wrapper">
       
       
       <div ref={loader}></div>
        {
          messages.map(
            (m) =>
            {
              
              return (usersParsed[m.author])? <Message user={usersParsed[m.author]}
              avatar={avatarArray[usersParsed[m.author].avatar - 1]} 
              content={m.content} 
              date={parseDate(m.send_date)} 
              self={username === m.author}/> 
              : undefined;
            }
          )
        }
        </div>
        <div className="send-message-wrapper">
        <Form
        form={form}
        name="send-message-form"
        className="send-message-form"
        preserve='false'
        onFinish={sendChat}
        size="large"
        >
        <Form.Item
        name="msg"
        className="send-message-textarea"
        >
        <Input.TextArea
        placeholder="Type your message here..."
        className="textarea"
        />
        </Form.Item>
        <div className="send-message-col">
        <Popover placement="topRight" content={<Emojis addEmoji={addEmoji}/>} trigger="click">
        <Button
        type="primary"
        shape="circle"
        icon={<SmileOutlined />}
        className="button"
        size="large"
        >
        </Button>
          </Popover>
        <Button
        shape="circle"
        icon={<SendOutlined />}
        type="primary"
        htmlType="submit"
        className="button send-button"
        size="large"
        >
        
        </Button>
        </div>
        
        
        </Form>
        
        </div>
        </div>
       </div>
       :
       <div className="chat-container chat">
       <p className="no-chat">
       No chat selected.</p>
       </div>
      
      
    )}
const mapStateToProps = (state) =>{
    return{
        username: state.login_signup.username,
        messages: state.chat.messages,
        chat: state.chat.chat,
        socket: state.chat.socket,
        chatId: state.chat.id,
        token: state.login_signup.token,
        lastMsg: state.chat.lastMsg,
        users: state.chat.users,
        loading: state.chat.loading,
        usersState:state.chat.users_recieved, 
        chatState:state.chat.chat_recieved,
        usersParsed: state.chat.usersParsed,
        date: state.chat.date,
        op: state.chat.op,
    }
    } 
    const mapDispatchToProps = (dispatch) => {
    return{
        addMessage: (m) => dispatch(chat_actions.addMessage(m)),
        getChat: (s,id) => dispatch(chat_actions.getChat(s,id)),
        chatRecieved: (c) => dispatch(chat_actions.chatRecieved(c)),
        saveSocket: (c) => dispatch(chat_actions.saveSocket(c)),
        sendMessage: (socket,msg, id) => dispatch(chat_actions.sendMessage(socket,msg, id)),
        setChatId: (c) => dispatch(chat_actions.setChatId(c)),
        lastChatRecieved: (c) => dispatch(chat_actions.lastChatRecieved(c)),
        socketConnected: (c) => dispatch(chat_actions.socketConnected(c)),
        getChatInfo:(id,token) => dispatch(chat_actions.getChatInfo(id,token)),
        addMessage: (m) => dispatch(chat_actions.addMessage(m)),
        sentToChat: (id) => dispatch(chat_actions.sentToChat(id)),
    }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(ChatContainer);
