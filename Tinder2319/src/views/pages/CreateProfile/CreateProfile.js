import React from 'react';
import CreateProfileForm from './components/CreateProfileForm';
import Interests from './components/InterestsForm'
import { Carousel } from 'antd';
import { useEffect,useRef } from 'react';
import '../../styles/App.scss';
import '../../styles/scss/styles.scss';
import '../../styles/CreateProfile.scss';
import {connect} from 'react-redux';
import * as create_profile_actions from '../../../core/create-profile/action/createProfileActions';

  

 const CreateProfile = ({setSlider}) => {
  
  useEffect(() => {
    console.log(slider);
    setSlider(slider);
  },[]);

  const slider = useRef();
    return (
      <div className="bg-container">
  <div className='box'>
  <div className='wave -one'></div>
  <div className='wave -two'></div>
  <div className='wave -three'></div>
  </div>
  
  <div className="create-profile-container"><h1>
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
