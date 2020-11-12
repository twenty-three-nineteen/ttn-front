import React from 'react';
import ReactDOM from 'react-dom';
import CreateProfileForm from './components/CreateProfileForm';
import Interests from './components/Interests'
import { Tabs,Menu,Popover, Button,Carousel } from 'antd';
import { useState,useEffect,useRef } from 'react';
import '../../styles/App.css';
import '../../styles/CreateProfile.css';


  

 const CreateProfile = () => {
  useEffect(() => {
    console.log(slider);
    // const element = document.getElementsByClassName('.steps-content');
    // const style = window.getComputedStyle(element);
    // setheight(style.height);
    // console.log(style.height);
  });

  const [height, setheight] = useState(0);
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const slider = useRef();
    return (
      <div className="login-signup-container profile-container">
  <div className='box'>
  <div className='wave -one'></div>
  <div className='wave -two'></div>
  <div className='wave -three'></div>
  </div>
  
  <div id="form-container" className="container"><h1>
  Create Your Profile</h1>


  <Carousel dotPosition="top"
  infinite={false}
  // adaptiveHeight={true}
  style={{
    paddingTop:"30px",
  }}
  ref={ref => {
    console.log(ref);
    slider.current = ref;
  }}
  
  >
  
   <CreateProfileForm slider={slider}/>


    <Interests slider={slider}/>

</Carousel>

  </div></div>
    );
  }

  export default CreateProfile;
