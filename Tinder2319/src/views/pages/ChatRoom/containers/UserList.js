import React from 'react'
import { Drawer, Button } from 'antd';
import { useState,useEffect} from 'react';
import { InfoCircleFilled } from '@ant-design/icons';
import unknownAv from '../../../../assessts/images/avatars/unknown.png';
import avatarArray from '../../CreateProfile/components/Avatar';

import '../../../styles/chat/userlist.scss';
const UserList = (props) => {
    return(

        <Drawer
          closable={false}
          onClose={()=>props.setVisible(false)}
          visible={props.visible}
          getContainer={false}
          placement="top"
        //   height="500"
          style={{ position: 'absolute' }}
        >
        <div className="user-list">
       
          {

              props.users.map(
                  (user)=>
                  {
                      // if(user.username != props.username)
                        return <div
                        onClick={
                          ()=>
                          {
                              window.open('https://talkzone.ir/profile/'+user.username);
                              // window.location.href = 'http://localhost:8080/profile/'+u.username; 
                          }
                      }
                       className="user-box">
                        <img src={avatarArray[user.avatar - 1]} className="user-avatar"/>
                        <div className="user-names">
                            <h2 className="user-name">{user.name}</h2>
                            <h3 className="user-username">@{user.username}</h3>
                        </div>
                        </div>
                  }
              )
          }
          </div>
        </Drawer>
      
    )}
export default UserList;