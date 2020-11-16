import React from 'react'
import { useState,useEffect} from 'react';
import { Form, Input, Button,Space,notification,message, Card,Modal } from 'antd';
import "../../styles/Profile.css"
import "../../styles/Posts.css"
import Animation from 'react-animation'
import Posts from "../Posts/Posts";

import axios from 'axios';

import {connect} from 'react-redux';
import * as profile_actions from '../../../core/profile/action/profileAction';


const Profile = ({avatar, setAvatar, name, setName, username, setUserName, age, setAge, bio, setBio,interests,setInterests}) => {

  const urlneeded = "http://localhost:8000/api/account/userprofile/" + "hastik"
    const token = '165395c16f3c66a6b56bfec0586f473685e02b47'
    useEffect(() => {
    //request , avatar, ...
    //set 
    // const addressArray = window.location.href.split("/").reverse();
    // setUserName(addressArray[0]);
    // console.log({username});
    // /profile/hasti
//     axios.get('http://localhost:8000/api/account/userprofile/hastik', {
//         headers: {
//           'Authorization': `Bearer ${token}` 
//         }
//       })
    
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })

      fetch(urlneeded, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
            // 'Content-Type': 'application/x-www-form-urlencoded',
          },
          
        })
        
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setName("hasti");
        setAvatar(data.user_profile.avatar);
        setUserName(data.user.username);
        setBio(data.user_profile.bio);
        setAge(data.user_profile.birthday);
        
            
      });

    },[]);

    const PostsPage = (e)=> {
        window.open("http://localhost:8080/Posts","_self");
    }
    return(
        <div>   
        <Card  className= "container" bordered={true} style={{ width: 600 }}>
        <div className= "PicandName" style ={{
            display: "flex",
            justifyContent: " space-around",
        }}>
            
            <div>
                <img className = " img" style = {{width:"150px", height:"140px", borderRadius:"80px"}}
                src= "https://images.unsplash.com/photo-1520262494112-9fe481d36ec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
            </div>
            <div className= "name" style ={{
            display: "flex",
            justifyContent: " space-around",
            
        }}>
                <h1>{name}</h1>
            </div>
        </div>
        <div>
            <div className="userNameDiv"><h2 className="textUserName">  UserName : {username} </h2></div> 
      <div className="bioDiv"><h2 className="textBio">  Bio : {bio}</h2></div>
            <div className="birthDayDiv"><h2 className="textBirthDay">  Date Of Birth : {age} </h2></div>
            <div className="interestsDiv"><h2 className="textInterests">  Interests : </h2></div>
            <Button id="myBtn" onClick={PostsPage} className="viewProB">View Posts</Button>
        </div>
        </Card>
        
        </div>
    )
}

const mapStateToProps = (state) =>{
    
    return{
      avatar: state.profile.avatar,
      age: state.profile.age,
      bio: state.profile.bio,
      username: state.profile.username,
      name: state.profile.name,
      interests: state.profile.interests,

    }
} 
  const mapDispatchToProps = (dispatch) => {
    return{
      setAvatar : (av) => dispatch(profile_actions.setAvatar(av)),
      setAge  : (av) => dispatch(profile_actions.setAge(av)),
      setBio  : (av) => dispatch(profile_actions.setBio(av)),
      setName  : (av) => dispatch(profile_actions.setName(av)),
      setUserName  : (av) => dispatch(profile_actions.setUserName(av)),
      setInterests  : (av) => dispatch(profile_actions.setInterests(av)),
    }
}
  
  export default connect(mapStateToProps,mapDispatchToProps)(Profile);