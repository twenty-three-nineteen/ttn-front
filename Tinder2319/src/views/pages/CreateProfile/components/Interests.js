import React from 'react';
import { Form, Input, Button,Checkbox   } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import { useState,useEffect } from 'react';
import axios from 'axios';
import AvatarModalWindow from './AvatarModalWindow';
const Interests = (props) => 
{
  const onChange = (checkedValues) => {
    // console.log('checked = ', checkedValues);
    setselectedInterest(checkedValues);
  }

  const plainOptions = ['Apple', 'Pear', 'Orange','Melon','Lemon','Grape','Berry','Banana','Mango'];

  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },

    


//use map, in reducer, just add whichever is checked??
  ];

  const handleCreateProfile = () =>
  {
    console.log(selectedInterest);
  }

  
  const [height, setheight] = useState(0)
  const [selectedInterest, setselectedInterest] = useState([]);

  const onFinish = (values) => {
    console.log(values);
    // console.log(selectedInterest);
      
  };

  useEffect(() => {
    
    const h = window.getComputedStyle(document.getElementById("interest-component")).height;
    setheight((parseFloat((h.split('px')[0]))*0.8));
    console.log();
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
options={plainOptions} onChange={onChange} />
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
        onClick={()=>{props.slider.current.prev()}}
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

export default Interests;