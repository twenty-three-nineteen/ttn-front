import React from 'react'
import { useState,useEffect} from 'react';
import unknownAv from '../../../../assessts/images/avatars/unknown.png';
import avatarArray from '../../CreateProfile/components/Avatar';
const Message = (props) => {//props = username date content self
    return(
       <div className={props.self? "message self":"message others"}>
        
      
        
           <div className="user-row ">
           <img className="user-avatar" src={((props.avatar)>0)?avatarArray[props.avatar - 1] : unknownAv}/>
           <p className="content">
           <h2 className="user">{props.user}</h2>
           {props.content}
           </p>     
           </div>
       
       <h3 className="date">{props.date}</h3>
       </div>
      
    )}
export default Message;