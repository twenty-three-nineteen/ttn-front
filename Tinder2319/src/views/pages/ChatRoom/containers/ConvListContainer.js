import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import { useState,useEffect} from 'react';

import { Drawer, Button } from 'antd';
import { CaretRightOutlined, ArrowRightOutlined } from '@ant-design/icons';
import {HOST_URL} from'../../../../core/servers';
import avatarArray from '../../CreateProfile/components/Avatar';

import Conversation from '../components/Conversation';
const ConvList = ({token,username,listToggle,activeChat,isMobile,chatRef,
  SetActiveChat,setListToggle})=>
{
  
    //const [activeChat, setactiveChat] = useState(1)
  const [chats, setchats] = useState([])
  useEffect(() => {
    const config = {

      headers: { 'Authorization': `Token ${token}` }

  };

  axios.get(
    `${HOST_URL}/api/chat`,
    config
  )
  .then(res => {

    console.log(res.data);
    setchats(res.data);
  })
  .catch(error =>
    {
      console.log(error);
    });
  }, [])


const goToChat= (id)=>
{
  SetActiveChat(id);
  chatRef = id;
  if(isMobile)
  {
    setListToggle(!listToggle);
    
  }
}

      return (
        <div className={listToggle?"chat-container conv-list":"chat-container conv-list closed"}>
        {
          (isMobile && activeChat)?
          <ArrowRightOutlined
          className="conv-list-back"
          onClick={
            ()=>setListToggle(false)
          }
          />
          :
          undefined
        }
        <div className="conv-list-wrapper">
        
        {chats.map(d=>
            <Conversation
            id={d.id}
            participants={d.participants}
            active={(d.id===activeChat)}
            username={username}
            goToChat={goToChat}
            />
            )}
            
            </div>
        </div>
        
      );
  
}

const mapStateToProps = (state) =>{
  return{
    token: state.login_signup.token,
    username: state.login_signup.username,
  }
} 

export default connect(mapStateToProps)(ConvList);