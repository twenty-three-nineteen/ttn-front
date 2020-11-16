import React from 'react'
import { Form, Input, Button,Space,notification,message, Card,Modal,Row,Col  } from 'antd';
import '../../styles/Posts'
import "../../styles/Profile.css"
import { useState,useEffect} from 'react';
import ShowPost from "../ShowPost/ShowPost";
import '../../styles/ShowPost'

import {connect} from 'react-redux';
import * as posts_actions from '../../../core/profile/action/postsAction';

const Posts = ({text,setText,select,setSelect}) => {
    
    useEffect(() => {
        //request , avatar, ...
        //set 
        setText("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.");
        // setSelect();
        console.log(select);
        },[]);
        const PostsPage = (e)=> {
            window.open("http://localhost:8080/posts","_self");
        }
        const ProPage = (e)=> {
            window.open("http://localhost:8080/profile","_self");
        }
    const setmySelect= (e)=>{
        setSelect("true");
    }
    if (select == undefined) {
        console.log("first" + {select});
        return(
            <div className="Postsdiv">
           <Row className = " RowStyle" wrap={true} justify="center">
                    
                    <Col className = " ColStyle" span={9} onClick={setmySelect} style={{margin:'1em',padding:'1em',borderRadius:'30px',backgroundColor: "rgb(0,0,0,0.36)"}}>
                        <p className = " textStyle"  style={{color : "whitesmoke",fontSize:"16px"}}>{text}
                        </p>
                    </Col>

 
                    <Col className = " ColStyle" span={9}  onClick={setmySelect} style={{margin:'1em',padding:'1em',borderRadius:'30px',backgroundColor: "rgb(0,0,0,0.36)"}}>
                        <p className = " textStyle"   style={{color : "whitesmoke",fontSize:"16px"}}>{text}
                        </p>
                    </Col>  
                    <Col className = " ColStyle" span={9} onClick={setmySelect} style={{margin:'1em',padding:'1em',borderRadius:'30px',backgroundColor: "rgb(0,0,0,0.36)"}}>
                        <p className = " textStyle"  style={{color : "whitesmoke",fontSize:"16px"}}>{text}
                        </p>
                    </Col>

 
                    <Col className = " ColStyle" span={9}  onClick={setmySelect} style={{margin:'1em',padding:'1em',borderRadius:'30px',backgroundColor: "rgb(0,0,0,0.36)"}}>
                        <p className = " textStyle"   style={{color : "whitesmoke",fontSize:"16px"}}>{text}
                        </p>
                    </Col>  
                    <Col className = " ColStyle" span={9} onClick={setmySelect} style={{margin:'1em',padding:'1em',borderRadius:'30px',backgroundColor: "rgb(0,0,0,0.36)"}}>
                        <p className = " textStyle"  style={{color : "whitesmoke",fontSize:"16px"}}>{text}
                        </p>
                    </Col>

 
                    <Col className = " ColStyle" span={9}  onClick={setmySelect} style={{margin:'1em',padding:'1em',borderRadius:'30px',backgroundColor: "rgb(0,0,0,0.36)"}}>
                        <p className = " textStyle"   style={{color : "whitesmoke",fontSize:"16px"}}>{text}
                        </p>
                    </Col>  
                    <Col className = " ColStyle" span={9} onClick={setmySelect} style={{margin:'1em',padding:'1em',borderRadius:'30px',backgroundColor: "rgb(0,0,0,0.36)"}}>
                        <p className = " textStyle"  style={{color : "whitesmoke",fontSize:"16px"}}>{text}
                        </p>
                    </Col>

 
                    <Col className = " ColStyle" span={9}  onClick={setmySelect} style={{margin:'1em',padding:'1em',borderRadius:'30px',backgroundColor: "rgb(0,0,0,0.36)"}}>
                        <p className = " textStyle"   style={{color : "whitesmoke",fontSize:"16px"}}>{text}
                        </p>
                    </Col>  
                    <Col className = " ColStyle" span={9} onClick={setmySelect} style={{margin:'1em',padding:'1em',borderRadius:'30px',backgroundColor: "rgb(0,0,0,0.36)"}}>
                        <p className = " textStyle"  style={{color : "whitesmoke",fontSize:"16px"}}>{text}
                        </p>
                    </Col>

 
                    <Col className = " ColStyle" span={9}  onClick={setmySelect} style={{margin:'1em',padding:'1em',borderRadius:'30px',backgroundColor: "rgb(0,0,0,0.36)"}}>
                        <p className = " textStyle"   style={{color : "whitesmoke",fontSize:"16px"}}>{text}
                        </p>
                    </Col>  
                    <Col className = " ColStyle" span={9} onClick={setmySelect} style={{margin:'1em',padding:'1em',borderRadius:'30px',backgroundColor: "rgb(0,0,0,0.36)"}}>
                        <p className = " textStyle"  style={{color : "whitesmoke",fontSize:"16px"}}>{text}
                        </p>
                    </Col>

 
                    <Col className = " ColStyle" span={9}  onClick={setmySelect} style={{margin:'1em',padding:'1em',borderRadius:'30px',backgroundColor: "rgb(0,0,0,0.36)"}}>
                        <p className = " textStyle"   style={{color : "whitesmoke",fontSize:"16px"}}>{text}
                        </p>
                    </Col>  
                 
            </Row>
            <Button  onClick={ProPage} className="Bif">View Profile</Button>
        </div>

        )
    } else {
        console.log("sec" + {select});
        return(
            <div className="showPostStyle" wrap={true} justify="center" >
            <p className = "textStyleOnePost" style={{color : "whitesmoke",fontSize: "20px"}}>{text}
            </p>
            <Button onClick={PostsPage} className="Belse">View Posts</Button>
        </div>
        )
        
    }
    }
    const mapStateToProps = (state) =>{
    
        return{
          text: state.posts.text,
          select: state.posts.select,
        }
    } 
      const mapDispatchToProps = (dispatch) => {
        return{
          setText : (av) => dispatch(posts_actions.setText(av)),
          setSelect : (av) => dispatch(posts_actions.setSelect(av)),
          
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);