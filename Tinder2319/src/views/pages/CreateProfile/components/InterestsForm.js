import React from 'react';
import { Form, Button,Checkbox,Modal,message   } from 'antd';
import { useState,useEffect } from 'react';
import axios from 'axios';
import {HOST_URL} from '../../../../core/servers';
import {connect} from 'react-redux';
import * as create_profile_actions from '../../../../core/create-profile/action/createProfileActions';
import history from "../../../../core/modules/history";


const Interests = ({slider, interests, setInterests,profileInfo,avatar,username,token,allInterests}) => 
{
  const [height, setheight] = useState(0)
    const onFinishFailed = ({values, errorFields})=>
    {
      message.error(
        'You should pick at least one!'
      )
    }
  const onFinish = (values) => {
    console.log(values);
      setInterests(values);
    axios.put(`${HOST_URL}/api/account/userprofile/${username}`, 
    {
      "name":profileInfo.name,"bio": profileInfo.bio,"birthday":profileInfo.birth,"interests":values.interests,"avatar":avatar
    },
    {
      headers: {
        'Authorization': `Token ${token}`,
        'Content-Type':'application/json',
      }
   })


    .then(function (response) {
      console.log(response);
      message.success({
        content: 'Your profile is saved!',
      });
      history.push('/explore');
    })
    .catch(error =>
      {
        console.log(error);
        if (error.response) {
          const msgArray = Object.keys(error.response.data).map((d)=>
          {
            console.log(error.response.data[d]);
            return (error.response.data[d]).join();
          })
          Modal.error({
            content: msgArray.join(' '),
          });
          console.log(msgArray);
        } else {
          Modal.error({
            content: error.message,
          });
        } 
      
      })
    
  
  };

  useEffect(() => {
    
    const h = window.getComputedStyle(document.getElementById("interest-component")).height;
    setheight((parseFloat((h.split('px')[0]))*0.8));
    
  },[]);

  return (
    
    <Form
    id="interest-component"
    className="interest-component"
    name="basic"
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    >
    <div  className="interest-container" style={{height:height }}>
<Form.Item
name="interests"
rules={[
  ({ getFieldValue }) => ({
    validator(rule, value) {
      if (value) {
        console.log(value);
        return Promise.resolve();
      }
      console.log(value);
      return Promise.reject('You should pick at least one!');
    },
  }),
]}
noStyle
>
<Checkbox.Group 
className="interest-checkbox-group"
options={allInterests}/>
</Form.Item>
</div>
    <div
    style={{
      height:"min-content"
    }}
    >
    <Button
        type="primary"
        
        className="prev-form-button"
        size="large"
        onClick={()=>{slider.current.prev()}}
        >
        Prev
        </Button>
        <Form.Item
        noStyle>
        <Button
        type="primary"
        htmlType="submit"
        className="done-form-button"
        size="large"
        >
        Done
        </Button>
        </Form.Item>
        </div>
      </Form>

  );
};

const mapStateToProps = (state) =>{
  return{
    interests : state.create_profile.interests,
    avatar : state.create_profile.avatar,
    slider : state.create_profile.slider,
    profileInfo: state.create_profile.profile_info,
    username: state.login_signup.username,
    token: state.login_signup.token,
    allInterests: state.login_signup.all_interests,
  }
} 
const mapDispatchToProps = (dispatch) => {
  return{
    setInterests : (ints) => dispatch(create_profile_actions.setInterests(ints))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Interests);