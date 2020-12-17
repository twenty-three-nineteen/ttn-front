import React from 'react'
import { useState,useEffect} from 'react';

const Message = (props) => {//props = user date content self
    return(
       <div className={props.self? "message self":"message others"}>
        
      
        
           <div className="user-row ">
           <img className="user-avatar" src={props.avatar}/>
           <p className="content">
           <h2 className="user">{props.user.name}</h2>
           {props.content}
           </p>     
           </div>
       
       <h3 className="date">{props.date}</h3>
       </div>
      
    )}
export default Message;