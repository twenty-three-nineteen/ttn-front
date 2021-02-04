import React from 'react'
import { Form, Input, Button,Space,notification,message, Card,Modal,Row,Col  } from 'antd';
import '../../styles/ShowPost'

const ShowPost = (props) => {
   
    
    return(
        <div>
            <p className = "showPostStyle" style={{color : "rgb(0,0,0,0.5)",fontSize: "20px"}}>It says I need to type at least ten characters, so here's this. Y'know what? I'm gonna type one hundred characters instead. Actually, I'm going to type five hundred characters. I'm definitely not going to type anywhere near one thousand characters, because that'd be ridiculous. Even if I wanted to type one thousand characters, I have to go to bed now anyway, so I simply don't have the time. I mean, I could just type a bunch of random letters or hold down one key, but that would be no fun at all.
            </p>
        </div>

    )
}
export default ShowPost