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
import Toolbar from "../../components/Menu.js";
import axios from "axios";

import { connect } from "react-redux";
import * as profile_actions from "../../../core/profile/action/profileAction";
import * as login_signup_actions from '../../../core/login-signup/action/loginSignupActions';
import Explore from "../Explore";
import { EditAvatarModal } from "./components/Profile";

import avatarArray from "../CreateProfile/components/Avatar";
import {HOST_URL} from "../../../core/servers";

const Profile = ({
  token,
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
  // setUserName,
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
  setLoginUsername,
  setToken,
  setLoginState,
  setUserCheck,
  usercheck,
}) => {
  const onValueChange = (event) => {
    setAvInput(event.target.value);
    console.log(event.target.value);
  };
  const InChange = (event) => {
    console.log(event);
    setInInput(event);
  };
  const setmyDelAc = (e) => {
    setDelAc(e);
  };
  const setmyOkB = (e) => {
    setOkB(e);
  };
  const [avInput, setAvInput] = useState(avatar);
  const AvatarsImages = avatarArray.map((av, i) => {
    return (
      <div className="radio">
        <label>
          <input
            type="radio"
            value={i + 1}
            checked={avInput === i + 1}
            onChange={onValueChange}
          />
          <img src={av} />
        </label>
      </div>

    );
  });
  const [inInput, setInInput] = useState(interests);

 
  const [birthdayInput, setBirthState] = useState(age);
  const [bioInput, setBioState] = useState(bio);
  const [nameInput, setNameState] = useState(name);
  const [passInput, setPassState] = useState("");
  const setBioInput = (e) => {
    setBioState(e.target.value);
    console.log(bioInput);
  };
  const setPassInput = (e) => {
    setPassState(e.target.value);
    console.log(passInput);
  };
  const setNameInput = (e) => {
    setNameState(e.target.value);
    console.log(nameInput);
  };
  const setBirthInput = (e) => {
    setBirthState(e.target.value);
  };
  useEffect(() => {
    const u = window.location.href.split("/").reverse()[0];
    if(u.toUpperCase()==="PROFILE")
    {
      setUserCheck(username);
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
        // setUserName(res.data.username);
        setBio(res.data.bio);
        setAge(res.data.birthday);
        setInterests(res.data.interests);
      });
    }
    else
    {
      setUserCheck(u);
      axios
      .get(
        `${HOST_URL}/api/account/userprofile/` + u,

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
        // setUserName(res.data.username);
        setBio(res.data.bio);
        setAge(res.data.birthday);
        setInterests(res.data.interests);
      });
    }
    console.log(usercheck);
    console.log(username);
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
      
   

  }, []);

  const DelAccount = async (e) => {
    try {
      const response = await axios.delete(
        `${HOST_URL}/api/account/auth/users/me/`,

        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
          data: {
            current_password: passInput,
          },
        }
      );
      
      LoginPage();
      console.log(response);
    } catch (error) {
      console.log(error);
      setmyOkB(true);
    }
  };
  const EditPro = (e) => {
    setEdit("true");
  };
  
  const EditAva = (e) => {
    setEditAvatar(true);
  };
  const closeModalAva = (e) => {
    setEditAvatar(false);
  };
  const EditInter = (e) => {
    setEditInterests(true);
  };
  const closeModalInter = (e) => {
    setEditInterests(false);
  };
  const ProPage = (e) => {
    console.log("test");

    window.location.reload();
  };

  const PostsPage = (e) => {
    history.push("/posts");
  };
  const LoginPage = (e) => {
    
    setToken(undefined);
    setLoginState(false);
    setLoginUsername(undefined);
    history.push("/login_signup");
  };
  const CloseEdit = (e) => {
    console.log(bioInput);
    console.log(nameInput);
    axios
      .put(
        `${HOST_URL}/api/account/userprofile/` + username,
        {
          bio: bioInput,
          avatar: avInput,
          name: nameInput,
          birthday: birthdayInput,
          interests: inInput,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        }
      )

      .then(function (response) {
        console.log(response);
        setEdit(undefined);
        ProPage();
      })
      .catch((error) => {
        console.log(error);
        ProPage();
      });
  };











  if (edit == undefined) {
    if (usercheck != username) {
      // setOthers(usercheck);
      return (
        <div className="maindiv " wrap={true} justify="center">
        <Toolbar></Toolbar>
          <Card
            className="container2 "
            bordered={true}
            style={{ width: "580px" }}
          >
            <div
              className="PicandName"
              style={{
                display: "flex",
                justifyContent: " space-between",
              }}
            >
              <div>
                <img className=" img" src={avatarArray[avatar - 1]} />
              </div>
              <div className="name">
                <h1 className="nameT">{usercheck}</h1>
              </div>
            </div>
            <div>
              <div className="userNameDiv">
                <h2 className="textUserName"> Name : {name} </h2>
              </div>
              <div className="bioDiv">
                <h2 className="textBio"> Bio : {bio}</h2>
              </div>
              <div className="birthDayDiv">
                <h2 className="textBirthDay"> Birthday : {age} </h2>
              </div>
  
              <div className="interestsDiv">
                <h2 className="textInterests">
                  {" "}
                  Interests :{" "}
                  {interests.map((id) => {
                    return allIn[id - 1].label + " ";
                  })}
                </h2>
              </div>
            </div>
            <Button onClick={PostsPage} className="viewPostB2">
                View Posts
              </Button>
          </Card>
          
        </div>
      );
    } else {
      return (
        <div className="maindiv " wrap={true} justify="center">
        <Toolbar></Toolbar>
          <Card
            className="container2 "
            bordered={true}
            style={{ width: "580px" }}
          >
            <div
              className="PicandName"
              style={{
                display: "flex",
                justifyContent: " space-between",
              }}
            >
              <div>
                <img className=" img" src={avatarArray[avatar - 1]} />
              </div>
              <div className="name">
                <h1 className="nameT">{username}</h1>
              </div>
            </div>
            <div>
              <div className="userNameDiv">
                <h2 className="textUserName"> Name : {name} </h2>
              </div>
              <div className="bioDiv">
                <h2 className="textBio"> Bio : {bio}</h2>
              </div>
              <div className="birthDayDiv">
                <h2 className="textBirthDay"> Birthday : {age} </h2>
              </div>
  
              <div className="interestsDiv">
                <h2 className="textInterests">
                  {" "}
                  Interests :{" "}
                  {interests.map((id) => {
                    return allIn[id - 1].label + " ";
                  })}
                </h2>
              </div>
            </div>
            <Row style={{ align: "middle" }}>
              <Button onClick={PostsPage} className="viewProB">
                View Posts
              </Button>
              <Button onClick={EditPro} className="editProB">
                Edit Profile
              </Button>
              <Button onClick={() => setmyDelAc(true)} className="delProB">
                Delete Profile
              </Button>
            </Row>
          </Card>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Modal className="DelModal"
              visible={delac}
              closable={false}
              footer={[
                <Button onClick={DelAccount}>Delete</Button>,
                <Button onClick={() => setmyDelAc(false)}>Cancel</Button>,
              ]}
            >
              <h2>
                Enter Password:{" "}
                <Input.Password type="password" className="PassIn" placeholder="pass" onChange={setPassInput}></Input.Password>{" "}
              </h2>
              <div>
            <Modal
              visible={okb}
              closable={false}
              footer={[<Button onClick={() => setmyOkB(false)}>Ok</Button>]}
            >
              <h2>Incorrect Password!</h2>
            </Modal>
          </div>
            </Modal>
          </div>
        </div>
      );
    }
   
  } else {
    return (
      <div className="maindiv" wrap={true} justify="center">
      <Toolbar></Toolbar>
        <Card className="container3" bordered={true} style={{ width: "580px" }}>
          <div
            className="PicandName"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <img className=" img" src={avatarArray[avatar - 1]} />
            </div>
            <div className="NameandB">
              <h2 className="userName">{username}</h2>
              <Button onClick={EditAva} className="ChangeAvatarB">
                Change Avatar
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <Modal
                visible={editavatar}
                title="Pick an avatar!"
                closable={false}
                footer={[<Button onClick={closeModalAva}>Done</Button>]}
              >
                <div
                  style={{
                    overflowY: "auto",
                    height: "300px",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {AvatarsImages}
                </div>
              </Modal>
            </div>
          </div>
          <div>
            <div className="userNameDiv">
              <h2 className="textUserName">
                {" "}
                Name:
                <Input
                  className="userIn"
                  placeholder={name}
                  onChange={setNameInput}
                ></Input>
              </h2>
            </div>
            <div className="bioDiv">
              <h2 className="textBio">
                {" "}
                Bio:
                <Input
                  className="bioIn"
                  placeholder={bio}
                  onChange={setBioInput}
                ></Input>{" "}
              </h2>
            </div>
            <div className="birthDayDiv">
              <h2 className="textBirthDay">
                {" "}
                Birthday:
                <Input
                  className="birthIn"
                  placeholder={age}
                  onChange={setBirthInput}
                ></Input>{" "}
              </h2>
            </div>
            <div className="interestsDiv">
              <h2 className="textInterests">
                {" "}
                Interests:
                <Button className="EditInB" onClick={EditInter}>
                  Edit Interests
                </Button>{" "}
              </h2>
            </div>
            <Modal
              visible={editinterests}
              title="Pick your interests!"
              closable={false}
              footer={[<Button onClick={closeModalInter}>Done</Button>]}
            >
              <div
                style={{
                  overflowY: "auto",
                  height: "300px",
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                <Checkbox.Group onChange={InChange} options={allIn} />
              </div>
            </Modal>
            <Button onClick={CloseEdit} className="doneB">
              Done
            </Button>
          </div>
        </Card>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    avatar: state.profile.avatar,
    age: state.profile.age,
    bio: state.profile.bio,
    name: state.profile.name,
    interests: state.profile.interests,
    edit: state.profile.edit,
    editavatar: state.profile.editavatar,
    editinterests: state.profile.editinterests,
    token: state.login_signup.token,
    inte: state.profile.inte,
    allIn: state.login_signup.all_interests,
    delac: state.profile.delac,
    okb: state.profile.okb,
    username: state.login_signup.username,
    usercheck: state.profile.usercheck,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setAvatar: (av) => dispatch(profile_actions.setAvatar(av)),
    setAge: (av) => dispatch(profile_actions.setAge(av)),
    setBio: (av) => dispatch(profile_actions.setBio(av)),
    setName: (av) => dispatch(profile_actions.setName(av)),
    // setUserName: (av) => dispatch(profile_actions.setUserName(av)),
    setInterests: (av) => dispatch(profile_actions.setInterests(av)),
    setEdit: (av) => dispatch(profile_actions.setEdit(av)),
    setEditAvatar: (av) => dispatch(profile_actions.setEditAvatar(av)),
    setEditInterests: (av) => dispatch(profile_actions.setEditInterests(av)),
    setInte: (av) => dispatch(profile_actions.setInte(av)),
    setDelAc: (av) => dispatch(profile_actions.setDelAc(av)),
    setOkB: (av) => dispatch(profile_actions.setOkB(av)),
    setLoginState:(f) => dispatch(login_signup_actions.setLoginState(f)),
    setToken: (l) => dispatch(login_signup_actions.setToken(l)),
    setLoginUsername: (u) => dispatch(login_signup_actions.setUsername(u)),
    setUserCheck: (u) => dispatch(profile_actions.setUserCheck(u)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
