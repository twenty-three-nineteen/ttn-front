import React from 'react';
import axios from 'axios';
import "../../styles/ChatList/ChatList.css";
import "../../styles/ChatList/ChatList.scss";
import {connect} from 'react-redux';
import { useState,useEffect} from 'react';
import history from '../../../core/modules/history';
import {HOST_URL} from'../../../core/servers';
import avatarArray from '../CreateProfile/components/Avatar';
import Toolbar from "../../components/Menu.js";
const ChatList = ({token,username})=>
{
  const [chats, setchats] = useState([])
  useEffect(() => {
    const config = {
      headers: { 'Authorization': `Token c1a66f15f120c36731c5f19424bfa6938f99074d` }
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
  // console.log(id);
  history.push(`/chat/${id}`)
}
      return (
        <div className="container">
        {chats.map(d=>
          <div onClick={()=>goToChat(d.id)} className="Chatbox chat-box" id="Chatbox">
          <div className="avatar-box"> 
          {
            d.participants.map(
              (user)=>
              {
                if(user.username != username)
                  return <img className="user-avatar" src={avatarArray[user.avatar]}/>
              }
            )
          }
          </div>
            <div className="name-box">
            {
              d.participants.map(
                (user)=>
                {
                  if(user.username != username)
                    return <h2 className="user-name">{user.name},</h2>
                }
              )
            }    
            </div>      
          </div>
          )}
        </div>
      );
  
}

const mapStateToProps = (state) =>{
  return{
    token: state.login_signup.token,
    username: state.login_signup.username,
  }
} 

export default connect(mapStateToProps)(ChatList);