import React from 'react';
import axios from 'axios';
import '../styles/Explore.css';
import Draggable from 'react-draggable'; 
import OpeningMessage from "../components/OpeningMessage.js";
import BehindOpeningMessage from "../components/BehindOpeningMessage.js";


class Explore extends React.Component {
  constructor(props){
    super(props);
    this.ClickedDown=this.ClickedDown.bind(this);
    this.ClickedUp=this.ClickedUp.bind(this);
    this.Fader=this.Fader.bind(this);
    this.myMove=this.myMove.bind(this);
    var sh=-(250/2)

    this.state={
      count:0,
      persons:[],
      clicked:false,
      mouseX:0,
      fader:0,
      xxx: 0,
      degneg: ""
    };
  }
  componentDidMount() {
   
      axios.get(`http://localhost:8000/api/account/opening_messages`)
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
  ClickedUp(){
    var x = event.clientX-this.state.mouseX;    
    var width = screen.width;
    if(x>0){
      if(x>0.15*width){
        this.setState((prev)=>{
          return {
              count: (prev.count+1)%this.state.persons.length
          };
        });
        alert("Accepted");
      }
    }
    else{
      x=x*(-1);
      if(x>0.15*width){
        this.setState((prev)=>{
          return {
              count: (prev.count+1)%this.state.persons.length
          };
        });
        alert("Rejected");
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
    if(f<0.05){
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
  render() {
      return (
        <div id="container">
          <BehindOpeningMessage text={this.state.persons[this.state.count+1]}></BehindOpeningMessage>

          <div className="TotalExplore">
              {this.state.clicked ? 
              <img className="trash_open" src={require('../../assessts/images/trash_open.jpg')}></img>
              : 
              <img className="trash_close" src={require('../../assessts/images/trash_close.jpg')}></img>}

              <Draggable
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
              
              
              {this.state.clicked ? 
                  <img className="envelop_open" src={require('../../assessts/images/envelop_open.png')}></img>
                : 
                  <img className="envelop_close" src={require('../../assessts/images/envelop_close.png')} ></img>}
          </div>
        </div>
      );
  }
}
export default Explore;