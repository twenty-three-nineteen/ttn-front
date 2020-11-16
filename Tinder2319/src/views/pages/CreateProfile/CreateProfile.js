import React from 'react';
import CreateProfileForm from './components/CreateProfileForm';
import Interests from './components/Interests'
import { Tabs,Menu,Popover, Button,Carousel } from 'antd';
import { useState,useEffect,useRef } from 'react';
import '../../styles/App.css';
import '../../styles/CreateProfile.css';
import {connect} from 'react-redux';
import * as create_profile_actions from '../../../core/create-profile/action/createProfileActions';

  

 const CreateProfile = ({setSlider}) => {
  
  useEffect(() => {
    console.log(slider);
    setSlider(slider);
  },[]);

  const [height, setheight] = useState(0);

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
  style={{
    paddingTop:"30px",
  }}
  ref={ref => {
    console.log(ref);
    slider.current = ref;
  }}
  
  >
  
   <CreateProfileForm/>


    <Interests/>

</Carousel>

  </div></div>
    );
  }
  const mapStateToProps = (state) =>{
    
    return{
      
    }
  } 
  const mapDispatchToProps = (dispatch) => {
    return{
      setSlider : (s) => dispatch(create_profile_actions.setSlider(s))
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(CreateProfile);
