import React from 'react';
import axios from 'axios';
import '../styles/Explore.css';
import {connect} from 'react-redux';
import { useState,useEffect} from 'react';
import Draggable from 'react-draggable'; 
import OpeningMessage from "../components/OpeningMessage.js";
import Toolbar from "../components/Menu.js";
import SideMenu from "../components/SlideMeny/SideMenu.js";
import BehindOpeningMessage from "../components/BehindOpeningMessage.js";
import {ReqOpeningMessageModal} from "../components/ReqOpeningMessageModal.js";
import {SmallScreen} from "../components/SmallScreen.js";
import { message,Menu, Button } from 'antd';
import { CloseCircleFilled,CheckCircleFilled} from '@ant-design/icons';


import SlideMenu from 'react-slide-menu';
import {HOST_URL} from '../../core/servers';

class Explore extends React.Component {
  constructor(props){
    super(props);
    this.ClickedDown=this.ClickedDown.bind(this);
    this.ClickedUp=this.ClickedUp.bind(this);
    this.Fader=this.Fader.bind(this);
    this.myMove=this.myMove.bind(this);
    this.handleOk=this.handleOk.bind(this);
    this.cancelButton=this.cancelButton.bind(this);
    this.Rejected=this.Rejected.bind(this);
    this.Accepted=this.Accepted.bind(this);
    this.toggleCollapsed=this.toggleCollapsed.bind(this);

    this.state={
      count:0,
      persons:[],
      clicked:false,
      mouseX:0,
      fader:0,
      xxx: 0,
      degneg: "",
      showModal: false,
      collapsed: false
    };
  }

  componentDidMount() {
      const config = {
          headers: { 'Authorization': `Token ${this.props.token}` }
      };

      axios.get(

        `${HOST_URL}/api/account/opening_messages/page/1`,

        config
      )
      .then(res => {
        console.log(res);
        this.setState(()=>{
          return {
              persons: res.data.map(d=>d.message)
          };
        });
      })
      .catch(error =>
        {
          console.log(error);
        });
        
  }
  cancelButton(){
      this.setState(()=>{
        return {
          showModal: false
        };
      });
  }
  handleOk(){

      var messagedimo=document.getElementById('messagedimo').value;

      var message_id = this.state.count-1;
      if(message_id==-1){
        message_id=this.state.persons.length;
      }
      else{
        message_id=message_id+1;
      }

      const config = {
        headers: { 
          'Authorization': `Token ${this.props.token}` ,
          'Content-Type': 'application/json'
        }
      };

      axios.post('${HOST_URL}/api/account/send_chat_request/', 
      {
        "source": 1,
        "target": 3,
        "opening_message": 3,
        "message": messagedimo
      }
      , config)
      .then(res => {
        message.success('You requested successfully!');
      })
      .catch(err =>
      {
        message.error(err.response.data.non_field_errors[0])
      })

      this.cancelButton();
  }

  ClickedDown(){
    var x = event.clientX;    
    var y = event.clientY; 
    this.setState(()=>{
      return {
          clicked: true, 
          mouseX: x,
      };
    });
  }
  Accepted(){
    
    this.setState((prev)=>{
      return {
          count: (prev.count+1)%this.state.persons.length,
          showModal: true
      };
    });
  }
  Rejected(){
    message.success('Rejected successfully!');
    this.setState((prev)=>{
      return {
          count: (prev.count+1)%this.state.persons.length
      };
    });
  }
  ClickedUp(){
    var x = event.clientX-this.state.mouseX;   
    var width = screen.width;
    if(x>0){
      if(x>0.15*width){
        this.Accepted();
      }
    }
    else{
      x=x*(-1);
      if(x>0.15*width){
        this.Rejected();
        // alert("Rejected");
      }
    }
    var drg=document.getElementById('OM');
    var behind=document.getElementById('BOM');

    drg.classList.toggle('fade'+this.state.fader+this.state.degneg);
    behind.classList.toggle('fade'+this.state.fader);

    this.setState((prev)=>{
      return {
          clicked: false,
          fader:0,
          degneg: ""

      };
    });
    
  }

  Fader(){
    var f=(event.clientX-this.state.mouseX)/(screen.width);
    var degree="";
    if(f<0){
      f=f*(-1);
      degree="neg";
    }
    
    var drg=document.getElementById('OM');
    var behind=document.getElementById('BOM');

    var flag=false;
    if(f<0.05){
      flag=true;
      if((this.state.fader!=1) || (this.state.degneg!=degree)){
        if(this.state.fader!=0){
          drg.classList.toggle('fade'+this.state.fader+this.state.degneg);
          behind.classList.toggle('fade'+this.state.fader);

        }
        drg.classList.toggle('fade1'+degree);
        behind.classList.toggle('fade1');
        this.setState(()=>{
          return {
            fader: 1
          };
        });
      }
    }
    
    else if(f<0.1){
      if(this.state.fader!=2){
        drg.classList.toggle('fade'+this.state.fader+this.state.degneg);
        behind.classList.toggle('fade'+this.state.fader);

        drg.classList.toggle('fade2'+degree);
        behind.classList.toggle('fade2');

        this.setState(()=>{
          return {
            fader: 2
          };
        });
      }
    }
    else if(f<0.15){
      if(this.state.fader!=3){
        drg.classList.toggle('fade'+this.state.fader+this.state.degneg);
        behind.classList.toggle('fade'+this.state.fader);


        drg.classList.toggle('fade3'+degree);
        behind.classList.toggle('fade3');
        this.setState(()=>{
          return {
            fader: 3
          };
        });
      }
    }
    else if(f<0.2){
      if(this.state.fader!=4){
        drg.classList.toggle('fade'+this.state.fader+this.state.degneg);
        behind.classList.toggle('fade'+this.state.fader);


        drg.classList.toggle('fade4'+degree);
        behind.classList.toggle('fade4');
        this.setState(()=>{
          return {
            fader: 4
          };
        });
      }
    }
    else if(f<0.25){
      if(this.state.fader!=5){
        drg.classList.toggle('fade'+this.state.fader+this.state.degneg);
        behind.classList.toggle('fade'+this.state.fader);


        drg.classList.toggle('fade5'+degree);
        behind.classList.toggle('fade5');
        this.setState(()=>{
          return {
            fader: 5
          };
        });
      }
    }
    else if(f<0.3){
      if(this.state.fader!=6){
        drg.classList.toggle('fade'+this.state.fader+this.state.degneg);
        behind.classList.toggle('fade'+this.state.fader);


        drg.classList.toggle('fade6'+degree);
        behind.classList.toggle('fade6');
        this.setState(()=>{
          return {
            fader: 6
          };
        });
      }
    }
    else if(f<0.35){
      if(this.state.fader!=7){
        drg.classList.toggle('fade'+this.state.fader+this.state.degneg);
        behind.classList.toggle('fade'+this.state.fader);


        drg.classList.toggle('fade7'+degree);
        behind.classList.toggle('fade7');
        this.setState(()=>{
          return {
            fader: 7
          };
        });
      }
    }
    else if(f<0.4){
      if(this.state.fader!=8){
        drg.classList.toggle('fade'+this.state.fader+this.state.degneg);
        behind.classList.toggle('fade'+this.state.fader);


        drg.classList.toggle('fade8'+degree);
        behind.classList.toggle('fade8');
        this.setState(()=>{
          return {
            fader: 8
          };
        });
      }
    }
    else if(f<0.45){
      if(this.state.fader!=9){
        drg.classList.toggle('fade'+this.state.fader+this.state.degneg);
        behind.classList.toggle('fade'+this.state.fader);


        drg.classList.toggle('fade9'+degree);
        behind.classList.toggle('fade9');

        this.setState(()=>{
          return {
            fader: 9
          };
        });
      }
    }
    else{
      if(this.state.fader!=10){
        drg.classList.toggle('fade'+this.state.fader+this.state.degneg);
        behind.classList.toggle('fade'+this.state.fader);


        drg.classList.toggle('fade10'+degree);
        behind.classList.toggle('fade10');

        this.setState(()=>{
          return {
            fader: 10
          };
        });
      }
    }
    this.setState(()=>{
      return {
          degneg: degree
      };
    });
  }
  myMove() {
    var elem = document.getElementById("myAnimation"); 
    console.log(elem);  
  }
  openning(inp){
    if(this.state.clicked==false){
      return false;
    }
    var x = event.clientX-this.state.mouseX;   
    if(inp=="envelop") {
      return (x>0);
    }
    else{
      return (x<0);

    }
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
      return (

          <div id="container">
            <div id="smallCon" className="smallCon">
              <SideMenu></SideMenu>
              <SmallScreen text={this.state.persons[this.state.count]}></SmallScreen>
              <div id="buttons" className="buttons">
                <CheckCircleFilled className="MyCheck" onClick={this.Accepted}></CheckCircleFilled>
                
                <CloseCircleFilled className="MyZarb" onClick={this.Rejected}></CloseCircleFilled>
              </div>
            </div>

            <BehindOpeningMessage text={this.state.persons[(this.state.count+1)%this.state.persons.length]}></BehindOpeningMessage>
            <Toolbar></Toolbar>

            <div className="TotalExplore">

                {this.openning("trash") ? 
                    <img className="envelop_open" src={require('../../assessts/images/trash_open.png')}></img>
                  : 
                    <img className="envelop_close" src={require('../../assessts/images/trash_close.png')} ></img>}

                
                <Draggable
                className="handle"
                axis="x"
                handle=".handle"
                defaultPosition={{x: 0, y: 0}}
                position={{x: 0, y: this.state.xxx}}
                grid={[25, 25]}
                scale={1}
                onStart={this.ClickedDown}
                onDrag={this.Fader}
                onStop={this.ClickedUp}
                >
                <div className="handle">
                  <div>
                    <OpeningMessage text={this.state.persons[this.state.count]}></OpeningMessage>
                  </div>
                </div>
                </Draggable>
                
                
                {this.openning("envelop") ? 
                  <img className="envelop_open" src={require('../../assessts/images/envelop_open.png')}></img>
                : 
                  <img className="envelop_close" src={require('../../assessts/images/envelop_close.png')} ></img>}
            </div>
            <ReqOpeningMessageModal cancelButton={this.cancelButton} okbtn={this.handleOk} showORnot={this.state.showModal}></ReqOpeningMessageModal>
        </div>
      );
  }
}
const mapStateToProps = (state) =>{
  return{
    token: state.login_signup.token,
    username: state.login_signup.username,
  }
} 

export default connect(mapStateToProps)(Explore)