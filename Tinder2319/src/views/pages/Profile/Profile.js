import React from 'react'
import { useState,useEffect} from 'react';
import { Form, Input, Button,Space,notification,message, Card,Modal,Row,Col,Checkbox } from 'antd';
import "../../styles/Profile.scss"
import "../../styles/Posts.scss"
import Animation from 'react-animation'
import Posts from "../Posts/Posts";
import history from "../../../core/modules/history"


import axios from 'axios';

import {connect} from 'react-redux';
import * as profile_actions from '../../../core/profile/action/profileAction';
import Explore from '../Explore';
import { EditAvatarModal } from './components/Profile';

import avatarArray from "../CreateProfile/components/Avatar"

const Profile = ({token,allIn,edit,setEdit,editavatar,editinterests,setEditAvatar,setEditInterests,avatar, setAvatar,
   name, setName, username, setUserName, age, setAge, bio, setBio,interests,setInterests,inte,setInte}) => {
  const onValueChange = (event) => {
    setAvInput(event.target.value);
    console.log(event.target.value);
  }
  const InChange = (event) => {
    console.log(event);
    setInInput(event);
  }
  const AvatarsImages = avatarArray.map(

    (av,i) =>
    {
      return(
        <div className="radio">
        <label>
          <input
            type="radio"
            value={(i+1)}
            checked={avInput === (i+1)}
            onChange={onValueChange}
          />
          <img src={av} />
        </label>
      </div>
      )
    }
  )
  const [inInput, setInInput] =useState(interests);
  const [avInput, setAvInput] = useState(avatar);
  const [birthdayInput, setBirthState] = useState(age);
  const [bioInput, setBioState] = useState(bio);
  const [nameInput, setNameState] = useState(name);
const setBioInput = (e) =>
{
  setBioState(e.target.value);
  console.log(bioInput);
}
const setNameInput = (e) =>
{
  setNameState(e.target.value);
  console.log(nameInput);
}
const setBirthInput = (e) =>
{
  setBirthState(e.target.value);
}
  // username="hastik";
  const urlneeded = "http://localhost:8000/api/account/userprofile/" + username
  // token = "f800bf07cc61a77aacdff38ae08bcfc7116256a3"
    useEffect(() => {
   
      // fetch(urlneeded, {
      //     method: 'GET', 
      //     mode: 'cors',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Authorization': `Token ${token}` 
      //     },
          
      //   })
      fetch("http://localhost:8000/api/account/interests/", {
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
      setInte(data);
      
    });
      axios.get('http://localhost:8000/api/account/userprofile/'+username, 
     
      {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type':'application/json',
        }
     })
      // .then(response => response.json())
      .then(res => {
        console.log(res);
        setName(res.data.name);
        setAvatar(res.data.avatar);
        setUserName(res.data.username);
        setBio(res.data.bio);
        setAge(res.data.birthday);
        setInterests(res.data.interests);
            
      });

    },[]);
   
    const EditPro = (e) => {
      setEdit("true");
    }
    const EditAva = (e) => {
      setEditAvatar(true); 
    }
    const closeModalAva = (e) =>{
      setEditAvatar(false);
    }
    const EditInter = (e) => {
      setEditInterests(true);
    }
    const closeModalInter = (e) =>{
      setEditInterests(false);
    }
    const ProPage = (e) => {
      // window.open("http://localhost:8080/profile","_self");
      console.log("test");
      
      window.location.reload();
  }

    const PostsPage = (e) => {
      history.push('/posts');
        // window.open("http://localhost:8080/Posts","_self");
    }
    const CloseEdit = (e) => {
      console.log(bioInput);
      console.log(nameInput);
      axios.put('http://localhost:8000/api/account/userprofile/'+username, 
        {"bio": bioInput,"avatar":avInput,"name":nameInput,"birthday":birthdayInput, "interests":inInput },
        {
          headers: {
            'Authorization': `Token ${token}`,
            'Content-Type':'application/json',
          }
       })
    
    
        .then(function (response) {
          console.log(response);
          ProPage();
        })
        .catch(error =>
          {
            console.log(error);
            ProPage();
          })
          

  }
    
    if (edit == undefined) {
      console.log(interests);
      return(
        <div className="maindiv " wrap={true} justify="center" >   
        <Card  className= "container2 " bordered={true} style={{ width: "580px" }}>
        <div className= "PicandName" style ={{
            display: "flex",
            justifyContent: " space-between",
        }}>
            
            <div>
                <img className = " img"
                src= {avatarArray[avatar-1]}/>
            </div>
            <div className= "name">
                <h1>{username}</h1>
            </div>
        </div>
        <div>
            <div className="userNameDiv"><h2 className="textUserName"> Name :  {name} </h2></div> 
            <div className="bioDiv"><h2 className="textBio"> Bio : {bio}</h2></div>
            <div className="birthDayDiv"><h2 className="textBirthDay"> Birthday  :  {age} </h2></div>
            
            <div className="interestsDiv"><h2 className="textInterests"> Interests :  {
              interests.map(
                (id)=>
                {
                  return allIn[id-1].label+' ';
                }
              )
            }</h2></div>
          
        </div>
        <Row style={{align:"middle"}}>
              <Button  onClick={PostsPage} className="viewProB">View Posts</Button>
              <Button  onClick={EditPro} className="editProB">Edit Profile</Button>
              
          </Row>
        </Card>
        
        </div>
    )
    } else {
      
      return(
        <div className="maindiv" wrap={true} justify="center">   
       
        <Card  className= "container2" bordered={true} style={{ width: "580px" }}>
        <div className= "PicandName" style ={{
            display: "flex",
            justifyContent: "space-between",
        }}>
            
            <div>
                <img className = " img"
                src={avatarArray[avatar-1]} />
            </div>
           <div className="NameandB">
           <h2  className= "userName">{username}</h2>
            <Button onClick={EditAva} className= "ChangeAvatarB">Change Avatar</Button>
           </div>
            <div style ={{
            display: "flex",
            justifyContent: "space-around",
            
        }}>
              
             
      
                <Modal
                  visible={editavatar}
                  title="Pick an avatar!"
                  closable={false}
                  footer={[
                      
                      <Button onClick={closeModalAva}>
                      Done
                      </Button>,
                  ]}>
                  <div style={{overflowY:"auto",height:"300px",display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
                  {AvatarsImages}
            
                  </div>
                </Modal>
            </div>
        </div>
        <div>
          
            <div className="userNameDiv"><h2 className="textUserName"> Name:<Input className="userin" placeholder={name} onChange={setNameInput}></Input></h2></div> 
            <div className="bioDiv"><h2 className="textBio"> Bio:<Input className="userin"  placeholder={bio} onChange={setBioInput}></Input>  </h2></div>
            <div className="birthDayDiv"><h2 className="textBirthDay"> Birthday:<Input className="userin"  placeholder={age} onChange={setBirthInput}></Input> </h2></div>
            <div className="interestsDiv"><h2 className="textInterests"> Interests:
            <Button  className="EditInB" onClick={EditInter}>Edit Interests</Button> </h2></div>
            <Modal
                  visible={editinterests}
                  title="Pick your interests!"
                  closable={false}
                  footer={[
                      
                      <Button onClick={closeModalInter}>
                      Done
                      </Button>,
                  ]}>
                  <div style={{overflowY:"auto",height:"300px",display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
                  <Checkbox.Group onChange={InChange} 
                  options={allIn}/>  
                  </div>
                </Modal>
            <Button  onClick={CloseEdit} className="doneB">Done</Button>
        </div>
        </Card>
        
        </div>
    )
      
    }
}

const mapStateToProps = (state) =>{
    
    return{
      avatar: state.profile.avatar,
      age: state.profile.age,
      bio: state.profile.bio,
      username: state.login_signup.username,
      name: state.profile.name,
      interests: state.profile.interests,
      edit: state.profile.edit,
      editavatar: state.profile.editavatar,
      editinterests: state.profile.editinterests,
      token: state.login_signup.token,
      inte: state.profile.inte,
      allIn: state.login_signup.all_interests,
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
      setEdit  : (av) => dispatch(profile_actions.setEdit(av)),
      setEditAvatar  : (av) => dispatch(profile_actions.setEditAvatar(av)),
      setEditInterests  : (av) => dispatch(profile_actions.setEditInterests(av)),
      setInte  : (av) => dispatch(profile_actions.setInte(av)),
    
    }
}
  
  export default connect(mapStateToProps,mapDispatchToProps)(Profile);