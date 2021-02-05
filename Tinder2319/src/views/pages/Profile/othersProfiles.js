import React from "react";
import { useState, useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Space,
  notification,
  message,
  Card,
  Modal,
  Row,
  Col,
  Checkbox,
} from "antd";
import "../../styles/Profile.scss";
import "../../styles/Posts.scss";
import Animation from "react-animation";
import Posts from "../Posts/Posts";
import history from "../../../core/modules/history";

import axios from "axios";

import { connect } from "react-redux";
import * as profile_actions from "../../../core/profile/action/profileAction";
import * as login_signup_actions from '../../../core/login-signup/action/loginSignupActions';
import Explore from "../Explore";
import { EditAvatarModal } from "./components/Profile";

import avatarArray from "../CreateProfile/components/Avatar";
import {HOST_URL} from "../../../core/servers";

const othersProfile = ({ token,
    allIn,
    edit,
    setEdit,
    editavatar,
    editinterests,
    setEditAvatar,
    setEditInterests,
    avatar,
    setAvatar,
    name,
    setName,
    username,
    setUserName,
    age,
    setAge,
    bio,
    setBio,
    interests,
    setInterests,
    inte,
    setInte,
    delac,
    setDelAc,
    okb,
    setOkB,
    setUsername,
    setToken,
    setLoginState,}) => {
    useEffect(() => {
 
        fetch(`${HOST_URL}/api/account/interests/`, {
          method: "GET", // *GET, POST, PUT, DELETE, etc.
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setInte(data);
          });
        axios
          .get(
            `${HOST_URL}/api/account/userprofile/` + username,
    
            {
              headers: {
                Authorization: `Token ${token}`,
                "Content-Type": "application/json",
              },
            }
          )
          
          .then((res) => {
            console.log(res);
            setName(res.data.name);
            setAvatar(res.data.avatar);
            setUserName(res.data.username);
            setBio(res.data.bio);
            setAge(res.data.birthday);
            setInterests(res.data.interests);
          });
    
          const checkUser = (e) => {
            setBirthState(e.target.value);
          };
      }, []);
    
  const ProPage = (e) => {
    console.log("test");

    window.location.reload();
  };

  const PostsPage = (e) => {
    history.push("/posts");
  };

};