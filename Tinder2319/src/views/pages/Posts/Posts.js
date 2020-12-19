import React from 'react'
import { Form, Input, Button,Space,notification,message, Card,Modal,Row,Col  } from 'antd';
import '../../styles/Posts'
import "../../styles/Profile.scss"
import { useState,useEffect,useRef} from 'react';
import history from "../../../core/modules/history"


import axios from 'axios';

import {connect} from 'react-redux';
import * as posts_actions from '../../../core/profile/action/postsAction';

import {HOST_URL} from "../../../core/servers";

const Posts = ({text,setText,select,setSelect,posts,setPosts,token,del,setDel,page,setPage,addPage}) => {
    const loader = useRef(null);
    const getPosts = (p) =>
    {
      axios
      .get(
        "${HOST_URL}/api/account/opening_messages/" + p,

        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
        addPage();
      });
    


  
    }
    useEffect(() => {
         var options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0
   };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current)
    }

      //getPosts();
        
        },[]);
    const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) { 
      var element = document.getElementsByClassName("post-text").length;
      var p = (element)? ((element/8) + 1): 1;
      if(Number.isInteger(p))
      {
        console.log(element,p);
        getPosts(p);
      }
      
      
    }
  }

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
            history.push('/posts');
            window.location.reload();
        }
        const ProPage = (e)=> {
            history.push('/profile');
        }
    const setmySelect= (e)=>{
        setSelect(e);
    }
    const setmyDel= (e)=>{
      setDel(e);
  }
    if (select == undefined) {
     
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
                                <p className = "post-text textStyle"  style={{color : "whitesmoke",fontSize:"16px"}}>{post.message}
                                </p>
                                </Col>
                            )
                        })
                    }
                  
            </Row>
            <div ref={loader}></div> 
        </div></Col>
         </Row>
         
        </div>
        )
    } else {
        return(
      
        <div>
                
        <Row>
        <Col><Button onClick={PostsPage} className="Belse1">View Posts</Button></Col>
        <Col><div className="Postsdiv2" style={{height:"500px",width:"400px",justify:"center"}}>
     
          <Row className = " RowStyle"  justify="center" style={{backgroundColor:"rgb(0,0,0,0.36)",height:"450px"}} >
            
            <p style={{color : "whitesmoke",fontSize: "20px",width:"200px",overflowWrap: "break-word",padding:"10px",textAlign:"center",textJustify:"center"}}>{select.message}
            </p>
             

           </Row>
           
       </div></Col>
       <Col>
       <Button  onClick={()=>setmyDel(true)} className="Belse2">Delete Post</Button>
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
          page: state.posts.page,
        }
    } 
      const mapDispatchToProps = (dispatch) => {
        return{
          setText : (av) => dispatch(posts_actions.setText(av)),
          setSelect : (av) => dispatch(posts_actions.setSelect(av)),
          setPosts : (av) => dispatch(posts_actions.setPosts(av)),
          setDel : (av) => dispatch(posts_actions.setDel(av)),
          setPage : (av) => dispatch(posts_actions.setPage(av)),
          addPage : (av) => dispatch(posts_actions.addPage(av)),
          
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(Posts);