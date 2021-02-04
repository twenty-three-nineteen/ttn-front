import React from 'react'
import { useState,useEffect} from 'react';
import {HOST_URL} from'../../../../core/servers';
import axios from 'axios';
import { Tooltip, Modal  } from 'antd';
import { InfoCircleFilled , CloseCircleFilled,DoubleLeftOutlined } from '@ant-design/icons';
import unknownAv from '../../../../assessts/images/avatars/unknown.png';
import avatarArray from '../../CreateProfile/components/Avatar';
import OPModal from '../components/OPModal';
const ChatHeader = ({users,username, isMobile, userList, date,op, activeChat,token,
    handleUserList,handleConvListToggle,setupdate,setActiveChat}) => {
        const [visible, setVisible] = useState(false);
        const leave = () =>
        {
            console.log('bye')
            axios.delete(
                `${HOST_URL}/api/chat/${activeChat}`,
                {
                  headers: {
                    Authorization: `Token ${token}`,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then(res => {
                //update
                setupdate(true);
                setActiveChat(0)
                console.log(res.data);
                // setchats(res.data);
              })
              .catch(error =>
                {
                  console.log(error);
                });
        }

    return(
        
        <div className="chat-header">
        <OPModal
        visible={visible}
        date={date}
        op={op}
        setVisible={setVisible}
        />
        {
            isMobile?
            <DoubleLeftOutlined
            className="show-conv-list"
            onClick={
                ()=>
                {
                    handleConvListToggle();
                    if(userList)
                        handleUserList();
                }
            }
            />
            :
            undefined
        }
        
        {
            //gp
            (users.length <= 4)?
            <div className={users.length<3? "avatar-box pv":"avatar-box"}>
            {
                users.map(
                    (user)=>
                    {
                        if(user.username != username)
                        {
                            return <img src={avatarArray[user.avatar - 1]} className="user-avatar"/>
                        }
                    }
                )
            }
            </div>
            :
            <div className="avatar-box">
            
            {
                users.map(
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
                +{users.length - 3}
                </h3>
            }
            <img src={unknownAv}/>
            </div>
            </div>
        }
        
        {
            (users.length > 2)?
            <h2
            onClick={()=>handleUserList()}
            className="user-count">{users.length + " members"}</h2>
            :
            
                users.map(
                    (u)=>
                    {
                        if(u.username!=username)
                        return <Tooltip placement="bottom" title={'@'+u.username}>
                        <h2 
                        onClick={
                            ()=>
                            {
                                window.open('http://localhost:8080/profile/'+u.username);
                                // window.location.href = 'http://localhost:8080/profile/'+u.username; 
                            }
                        }
                        className="user-name">{u.name}</h2></Tooltip>

                    }
                )
            
        }

         <InfoCircleFilled
         className="info"
         onClick={()=>setVisible(true)}
         />
         <CloseCircleFilled
         className="leave"
         onClick={
             ()=>
             {

                 Modal.confirm(
                    {
                        content: "Do you want to leave the chat?",
                        onOk: leave,
                    }
                );
             }
         }
         />
        </div>
      
    )}
export default ChatHeader;