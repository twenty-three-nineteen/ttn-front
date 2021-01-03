import React from 'react'
import { useState,useEffect} from 'react';


import { MessageOutlined } from '@ant-design/icons';
import unknownAv from '../../../../assessts/images/avatars/unknown.png';
import avatarArray from '../../CreateProfile/components/Avatar';
const Message = (
    {
        id, participants, active,username,
        goToChat,
    }
) => {//props = user date content self
    return(
        <div onClick={()=>goToChat(id)} className={(active)? " conv-box active": " conv-box"} id="Chatbox">
        
        {
            (participants.length>2)? //gp

           
            (participants.length>4)?
            <div className="avatar-box">
            <div className="gp-wrapper">
            {
                participants.map(
                    (user,i)=>
                    {
                        if(user.username != username)
                        {
                            if(i <= 2)
                                return <img src={avatarArray[user.avatar - 1]} className="user-avatar"/>
                        }
                    }
                )
                
            }
            <div className="unknown">
            {
                <h3 className="count">
                +{participants.length - 3}
                </h3>
            }
            <img src={unknownAv}/>
            </div>
            
            </div>
            </div>


            :


            
            <div className="avatar-box"> 

            <div className="gp-wrapper">
            {
                participants.map(
                  (user)=>
                  {
                    if(user.username != username)
      
                      return <img className="user-avatar" src={avatarArray[user.avatar-1]}/>
      
                  }
                )
              }
            </div>
            </div>


            :
            //pv
            <div className="avatar-box"> 
            {
          participants.map(
            (user)=>
            {
              if(user.username != username)

                return <img className="user-avatar pv" src={avatarArray[user.avatar-1]}/>

            }
          )
            }
        </div>
        }
        
          <div className="name-box">
          
          {
            (participants.length>2)? //gp
            <h2 className="user-count">{participants.length + " members"}</h2>
            :

            participants.map(
              (user)=>
              {
                if(user.username != username)

                  return <h2 className="user-name">{user.name}</h2>

              }
            )

            
            
          }   
          </div>      
        </div>
      
    )}
export default Message;