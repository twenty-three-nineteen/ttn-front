import React from 'react'
import { useState,useEffect} from 'react';
import { InfoCircleFilled , UnorderedListOutlined, CloseCircleFilled,DoubleLeftOutlined } from '@ant-design/icons';
import unknownAv from '../../../../assessts/images/avatars/unknown.png';
import avatarArray from '../../CreateProfile/components/Avatar';
import OPModal from '../components/OPModal';
const ChatHeader = ({users,username, isMobile, userList, date,op,
    handleUserList,handleConvListToggle}) => {
        const [visible, setVisible] = useState(false);
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
            <h2 className="user-name">{
                users.map(
                    (u)=>
                    {
                        if(u.username!=username)
                        return u.name;

                    }
                )
            }</h2>
        }

         <InfoCircleFilled
         className="info"
         onClick={()=>setVisible(true)}
         />
         <CloseCircleFilled className="leave"/>
        </div>
      
    )}
export default ChatHeader;