import React from 'react'
import { useState,useEffect} from 'react';

const Emojis = (props) => {//props = user date content self
    const array =
    [
        '😃','😆', '😅' ,'😂' ,'🤣','😍',,'😊','🥰','😭','🥺','😡','🤯', '😳',
        '😶' ,'😐','🥱',
        '🙏',
        '🌸','🔥',
        '❤️',
        
    ]
    return(
       <div className="emojis-container">
       {array.map(
           (emoji)=>
           {
               return <span onClick={()=>props.addEmoji(emoji)} className="emoji" role="img">{emoji}</span>
           }
       )}
       </div>
      
    )}
export default Emojis;