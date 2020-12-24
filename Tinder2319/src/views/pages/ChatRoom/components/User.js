import React from 'react'

import { Tooltip } from 'antd';
const User = (props) => {//props = user date content self
    return(
       <div className="user-box">
       <img className="user-avatar" src={props.avatar}/>
       <Tooltip placement="bottom" title={'@'+props.username}>
       <h1 className="user-name">{props.name}</h1></Tooltip>
       </div>
      
    )}
export default User;