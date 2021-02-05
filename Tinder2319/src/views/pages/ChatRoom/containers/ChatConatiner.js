import React from 'react'
import { useState,useEffect,useRef } from 'react';
import { Form, Input, Button, Popover,Spin } from 'antd';

import { SendOutlined,SmileOutlined,InfoCircleFilled,TeamOutlined,CaretRightOutlined } from '@ant-design/icons';
import moment from 'moment';
import Message from '../components/Message';
import User from '../components/User';
import Emojis from './Emoji';
import {connect} from 'react-redux';
import * as chat_actions from '../../../../core/chat/action/chatActions';

import ChatHeader from './ChatHeader';
import UserList from './UserList';

const ChatContainer = ({socket,username, messages,token, users,usersParsed, usersState, chatState,update,
  activeChat,isMobile,listToggle, date,op,loadedNumber,changeChat,allChatLoaded,
    getChat,sendMessage,getChatInfo,handleConvListToggle,getPrevMsg,setupdate,setActiveChat
   }) => {
    const [userList, setuserList] = useState(false);
    const [load, setLoad] = useState(false);
    const [updateScroll, setUpdateScroll] = useState(false);
    const [containerH, setContainerH] = useState(0)
    const [prevScroll, setPrevScroll] = useState(0)

    const loader = useRef(null);
    const messageContainer = useRef(null);
    const bottomDummy = useRef(null);


    const handleObserver = (entities) => {
      const target = entities[0];
      if (target.isIntersecting) { 
        setLoad(true);
      }
    }
    
    var options = {
      threshold: 1.0
   };
    const observer = new IntersectionObserver(handleObserver,options);

    useEffect(() => {

      if(updateScroll)
      {
        if(load)
        {
          messageContainer.current.scrollTo(0,messageContainer.current.scrollHeight- containerH);
        }
        else{
          scrollToBottom()
          if(loadedNumber >= 10)
          {
            
        if (loader.current) {
          observer.observe(loader.current)
        }
          }
        }
      }
      return () => {
        setLoad(false)
        setUpdateScroll(false)
        setContainerH(messageContainer.current.scrollHeight);
        setPrevScroll(messageContainer.current.scrollTop);
      }
    }, [updateScroll])


    useEffect(() => {
      const timer = setTimeout(() => 
        {
          if(load)
          {
            if(loadedNumber>=10)
            {
              getPrevMsg(socket,activeChat,loadedNumber);
            }
          }
        }
      , 500);

      return () => {
        clearTimeout(timer);
      }
    }, [load])


    useEffect(() => {
      if(allChatLoaded)
      {
        console.log("done");
        observer.unobserve(loader.current);
      }
      
    }, [allChatLoaded])

    

    useEffect(() => {
    
      if(activeChat)
      {
        
        if(messageContainer)
        {
          setContainerH(messageContainer.current.scrollHeight);
          setPrevScroll(messageContainer.current.scrollHeight);
          messageContainer.current.addEventListener('DOMNodeInserted', event =>
          {
            setUpdateScroll(true)
          })
        }

        setuserList(false);
        changeChat();
        getChatInfo(activeChat,token);
        getChat(socket, activeChat);

      }
  }, [activeChat])

   

useEffect(() => {
  if(activeChat)
  {
    getChatInfo(activeChat,token);
    //getChat(socket, activeChat);
  }
}, [update])
   

  function scrollToBottom(){
    bottomDummy.current.scrollIntoView();
  }

  const [form] = Form.useForm();

  const sendChat = (values) =>
  {
   if(values.msg)
   {
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

    return(
      
        (activeChat)?
      
       <div className="chat-container chat">
       
         
       
      <ChatHeader
      setActiveChat={setActiveChat}
      setupdate={setupdate}
      isMobile={isMobile}
      users={users}
      username={username}
      userList={userList}
      date={parseDate(date)}
      op={op}
      token={token}
      activeChat={activeChat}
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
       
       
       <div ref={loader} style={{textAlign:"center"}}>
       {(allChatLoaded||(loadedNumber<10))?
        <div className="chat-notif">Your chat starts here!</div>
      :
      <Spin size="small" />}
    </div>
        {
          messages.map(
            (m) =>
            {
              
              return ('author' in m)?
              <Message user={m.authorName}
              avatar={m.avatarId} 
              content={m.content} 
              date={parseDate(m.send_date)} 
              self={username === m.author}/> 
              :
            <div className="chat-notif">{m.content}</div>
            }
          )
        }
        <div ref={bottomDummy}></div>
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
        loadedNumber: state.chat.loadedNumber,
        allChatLoaded: state.chat.all_chat_loaded,
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
        getPrevMsg:(s,i,l) => dispatch(chat_actions.getPrevMsg(s,i,l)),
        changeChat:(m) => dispatch(chat_actions.changeChat(m)),
    }
    }
    
  export default connect(mapStateToProps,mapDispatchToProps)(ChatContainer);
