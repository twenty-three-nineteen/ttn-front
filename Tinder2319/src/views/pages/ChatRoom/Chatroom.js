import React from 'react'
import { useState,useEffect,useRef } from 'react';
import { Form, Input, Button, Popover } from 'antd';
import "../../styles/Chat.scss";
import { SendOutlined,SmileOutlined} from '@ant-design/icons';
import moment from 'moment';
import avatarArray from '../CreateProfile/components/Avatar';
import Message from './components/Message';
import User from './components/User';
import Emojis from './components/Emoji';
import {connect} from 'react-redux';
import * as chat_actions from '../../../core/chat/action/chatActions';
import * as socket_actions from '../../../core/chat/socket/index';

const Chatroom = ({socket,username,chatId, messages,token, users, usersState, chatState,
    addMessage,getChat,chatRecieved,sendMessage,saveSocket,setChatId,socketConnected,getChatUsers
   }) => {
    const [newMsgScroll, setnewMsgScroll] = useState(true);
    let messagesClasses = document.getElementsByClassName("message");
    const loader = useRef(null);
    const messageContainer = useRef(null);
    const handleCommand = (data) =>
  {
    const command = data.command;
    if(command === "messages")
	{
      console.log(data);
      chatRecieved(data.messages);
      updateScroll();
    }
    else if(command === "new_message")
    {
      console.log(data);
      addMessage(data.message);
      updateScroll();
    }
  }
  function updateScroll(){
    messageContainer.current.scrollTop = messageContainer.current.scrollHeight;
  }


  const handleSocketConnection = (s,id) =>
  {
    socketConnected(true)
    getChat(s,id);
    getChatUsers(id,token);
  }

  useEffect(() => {
    updateScroll();
    const id=(window.location.pathname.split('/').reverse()[0]);
    setChatId(id);
    const s = socket_actions.setupSocket(handleCommand,token);
    socket_actions.waitForSocketConnection(s,id,handleSocketConnection);
    saveSocket(s);

  //   var options = {
  //     root: null,
  //     rootMargin: "20px",
  //     threshold: 1.0
  //  };
    // const observer = new IntersectionObserver(handleObserver, options);
    // if (loader.current) {
    //   observer.observe(loader.current)
    // }
    
  }, []);
  
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
    sendMessage(
        socket,values.msg,chatId
      );
      form.resetFields(['msg']);
   }
  }
  const addEmoji = (e)=>
  {
    console.log(e);
    
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
  
  let usersParsed = {};
  useEffect(() => {
    console.log(messagesClasses);
    console.log(usersParsed);
    updateScroll();
  }, [usersParsed])
    return(
       <div className="chat-container">
       <div className="chat-header">
       
       {
         users.map(
           (user)=>
           {  
            usersParsed[user.username]=
            {
              username:user.username,
              name: user.name,
              avatar:user.avatar-1,
            }
             if(user.username != username)
              {
               
                return <User username={user.username} name={user.name} avatar={avatarArray[user.avatar-1]}/>
              }
           }
         )
       }
       
      
       </div>
       <div ref={messageContainer} className="message-wrapper">
       <div ref={loader}></div>
        {
          messages.map(
            (m) =>
            {
              
              return (usersParsed[m.author])? <Message user={usersParsed[m.author]}
              avatar={avatarArray[usersParsed[m.author].avatar]} 
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
        getChatUsers:(id,token) => dispatch(chat_actions.getChatUsers(id,token)),
    }
    }
    
    export default connect(mapStateToProps,mapDispatchToProps)(Chatroom);
