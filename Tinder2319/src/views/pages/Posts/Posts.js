import React from 'react'
import { Form, Input, Button,Space,notification,message, Card,Modal,Row,Col  } from 'antd';
import '../../styles/Posts'
import "../../styles/Profile.scss"
import { useState,useEffect} from 'react';
import history from "../../../core/modules/history"


import axios from 'axios';

import {connect} from 'react-redux';
import * as posts_actions from '../../../core/profile/action/postsAction';

const Posts = ({text,setText,select,setSelect,posts,setPosts,token,del,setDel}) => {
    const urlneeded = "http://localhost:8000/api/account/opening_messages/"
    // const token2 ="f800bf07cc61a77aacdff38ae08bcfc7116256a3"
    
    useEffect(() => {
       
        fetch(urlneeded, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}` 
            },
            
          })
          
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setPosts(data);
          
        });
  
        console.log(select);
        },[]);
        const DelPostSelected = (e)=> {
            console.log(e);
            axios.delete('http://localhost:8000/api/account/opening_messages/'+e, 
            
            {
              headers: {
                'Authorization': `Token ${token}`,
                'Content-Type':'application/json',
              }
           })
        
        
            .then(function (response) {
              console.log(response);
            })
            .catch(error =>
              {
                console.log(error);
              })
            PostsPage();
        }
        const PostsPage = (e)=> {
            // window.open("http://localhost:8080/posts","_self");
            history.push('/posts');
            window.location.reload();
        }
        const ProPage = (e)=> {
            // window.open("http://localhost:8080/profile","_self");
            history.push('/profile');
        }
    const setmySelect= (e)=>{
        setSelect(e);
    }
    const setmyDel= (e)=>{
      setDel(e);
  }
    if (select == undefined) {
        console.log("first" + {select});
        console.log(posts);
        
        return(
            <div>
                
         <Row>
         <Col><Button  onClick={ProPage} className="Bif">View Profile</Button></Col>
         <Col><div className="Postsdiv" style={{overflowY:"auto",height:"500px",justify:"center"}}>
      
           <Row className = " RowStyle"  justify="center" >
                    {
                        posts.map((post,index) => {
                            return(
                                <Col key={index} className = " ColStyle" span={9} onClick={()=>{setmySelect(post)}} style={{margin:'1em',padding:'1em',borderRadius:'2px',backgroundColor: "rgb(0,0,0,0.36)"}}>
                                <p className = " textStyle"  style={{color : "whitesmoke",fontSize:"16px"}}>{post.message}
                                </p>
                                </Col>
                            )
                        })
                    }
                  
            </Row>
            
        </div></Col>
         </Row>
      
        </div>
        )
    } else {
        console.log("sec" + {select});
        return(
           
        // <div className="showPostStyle" >
        //     <div className="showPostText" >
        //     <p style={{color : "whitesmoke",fontSize: "20px"}}>{select.message}
        //     </p>
        //     </div>
        //    <div className="action">
        //    <Button onClick={PostsPage} className="Belse1">View Posts</Button>
        //     <Button  onClick={()=>{DelPostSelected(select.id)}} className="Belse2">Delete Post</Button>
        //    </div>
        // </div>
        <div>
                
        <Row>
        <Col><Button onClick={PostsPage} className="Bif">View Posts</Button></Col>
        <Col><div className="Postsdiv" style={{height:"500px",width:"400px",justify:"center"}}>
     
          <Row className = " RowStyle"  justify="center" style={{backgroundColor:"rgb(0,0,0,0.36)",height:"450px"}} >
            
            <p style={{color : "whitesmoke",fontSize: "20px",width:"200px",overflowWrap: "break-word",padding:"10px",textAlign:"center",textJustify:"center"}}>{select.message}
            </p>
             

           </Row>
           
       </div></Col>
       <Col>
       <Button  onClick={()=>setmyDel(true)} className="Bif">Delete Post</Button>
       </Col>
        </Row>
        <div style ={{
            display: "flex",
            justifyContent: "space-around",
            
             }}>
                <Modal
                  visible={del}
                  
                  closable={false}
                  footer={[
                      
                      <Button onClick={()=>DelPostSelected(select.id)}>
                      Delete
                      </Button>,
                      <Button onClick={()=>setmyDel(false)}>
                      Cancel
                      </Button>,
                  ]}>
                 <h2>Are you sure?</h2>
                </Modal>
            </div>
       </div>

        )
        
    }
    }
    const mapStateToProps = (state) =>{
    
        return{
          text: state.posts.text,
          select: state.posts.select,
          posts: state.posts.posts,
          token: state.login_signup.token,
          del: state.posts.del,
        }
    } 
      const mapDispatchToProps = (dispatch) => {
        return{
          setText : (av) => dispatch(posts_actions.setText(av)),
          setSelect : (av) => dispatch(posts_actions.setSelect(av)),
          setPosts : (av) => dispatch(posts_actions.setPosts(av)),
          setDel : (av) => dispatch(posts_actions.setDel(av)),
          
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);