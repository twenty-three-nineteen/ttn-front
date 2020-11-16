import React from 'react';
import { Form, Input, Button,Checkbox   } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { useState,useEffect } from 'react';
import axios from 'axios';
import AvatarModalWindow from './AvatarModalWindow';

import {connect} from 'react-redux';
import * as create_profile_actions from '../../../../core/create-profile/action/createProfileActions';



const Interests = ({slider, interests, setInterests,profileInfo}) => 
{


  const plainOptions = ['Apple', 'Pear', 'Orange','Melon','Lemon','Grape','Berry','Banana','Mango'];

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];

  
  const [height, setheight] = useState(0)

  const onFinish = (values) => {
    console.log(values);
    
    // console.log(selectedInterest);
      setInterests(values);

    axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    const birthday = (profileInfo.birth)? profileInfo.birth.join('-'): undefined;
    const addressArray = window.location.href.split("/").reverse();
    axios.put('http://localhost:8000/api/account/userprofile/'+addressArray[0], 
    {"bio": profileInfo.bio,"birthday":birthday},
    {'Content-Type':'application/json'})
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(error =>
      {
        // setLoading(false);
        
        console.log(error);
        // Modal.error({
          // content: error.message,
        // });
        // console.log(error.toJSON());
        if (error.response) {
          console.log('res');
          console.log(error.response.data);
          // error.response.data.keys
          // for (var i = 0; i < error.response.data.length; i++) {
            // erMsg+= error.response.data[i];
          // }
          // console.log(erMsg);
          // let msg = "";
          // const msgArray = Object.keys(error.response.data).map((d)=>
          // {
          //   console.log(error.response.data[d]);
          //   return (error.response.data[d]).join();
          // })
          // Modal.error({
          //   content: msgArray.join(' '),
          // });
          // console.log(msgArray);
          // message.error(error.response.data.non_field_errors[0])
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          console.log(error.message);
          // Modal.error({
            // content: error.message,
          // });
        } })
    
  
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
    >
    <div  className="interest-container"   style={{height:height }}>
<Form.Item
name="interests"
noStyle
>
<Checkbox.Group 
className="interest-checkbox-group"
options={plainOptions}/>
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
    slider : state.create_profile.slider,
    profileInfo: state.create_profile.profile_info,
  }
} 
const mapDispatchToProps = (dispatch) => {
  return{
    setInterests : (ints) => dispatch(create_profile_actions.setInterests(ints))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Interests);