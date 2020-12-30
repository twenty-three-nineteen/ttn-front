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
  Radio,
} from "antd";
import history from "../../../core/modules/history";
import "../../styles/compose";

import axios from "axios";
import { connect } from "react-redux";
import * as compose_actions from "../../../core/compose/actions/composeActions";

import {HOST_URL} from "../../../core/servers";




const Compose = ({
  token,
  maxnummodal,
  catmodal,
  interest,
  num,
  setMaxNumModal,
  setCatModal,
  setInterest,
  setNum,

  }) => {
    const closeCatModal = (e) => {
      setCatModal(false);
    };
    const OpenCatModal = (e) => {
      setCatModal(true);
    };
    const closeMaxNumModal = (e) => {
      setMaxNumModal(false);
    };
    const OpenMaxNumModal = (e) => {
      setMaxNumModal(true);
    };
    const InChangeCat = (event) => {
      // console.log(event);
      setCatInput(event);
    };
    const InChangeNum = (event) => {
      // console.log(event);
      setNumInput(event.target.value);
    };
    const InChangeMsg = (event) => {
      // console.log(event.target.value);
      setMsgInput(event.target.value);
    };
  
    const [catInput, setCatInput] = useState("");
    const [numInput, setNumInput] = useState(num);
    const [msgInput, setMsgInput] = useState("");

    const [allInterests, setAllInterests] = useState([]);
    const PostOpM = (e) => {

      axios
        .post(
          `${HOST_URL}/api/account/opening_messages/`,
          {
            message: msgInput,
            categories: catInput,
            max_number_of_members: numInput
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
          ComposePage();
        })
        .catch((error) => {
          console.log(error);

          // ComposePage();
        });
    };
    const ComposePage = (e) => {
      window.location.reload();
    };
    // const setAllInterest = (e) => {
    //   interest.map((id) => {
    //     return allInterest[id - 1].label + " ";
    //   })
    //   console.log("inetrs");
    // };
    const allNum = [
      {
        label:"2",
        value:2,
      },
      {
        label:"3",
        value:3,
      },
      {
        label:"4",
        value:4,
      },
      {
        label:"5",
        value:5,
      }
    ];
    // const setNums = (e) => {
    //   allNum=[2,3,4,5];
    // };
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
          setAllInterests(
            data.map(
              (object,index)=>
              {return {
                label: object.subject,
                value: object.id,
              }}
            )
          )
          // setInterest(data);
        });
        // setAllInterest();
        
    
    },[]);
        return(
          <div>
                  
          <Row>
          <Col><div className="composeMainDiv" >
       
            <Row style={{backgroundColor:"rgb(0,0,0,0.36)"}} >
      
              <Input.TextArea placeholder={"Say something..."} onChange={InChangeMsg} className="inputOPM" style={{color : "grey",fontSize: "20px",display: "inline-block",overflowWrap: "break-word",textAlign:"center",textJustify:"center"}}></Input.TextArea>

             </Row>
        
          </div></Col>
   
          </Row>


          <Row>
          <Col>
          <Button className="maxReplyB" onClick={OpenMaxNumModal}>Max group number</Button>
          </Col>
          <Col>
          <Button className="catB"  onClick={OpenCatModal}>Categories</Button>
          </Col>
          </Row>


          <Row>
          <Col>
          <Button className="postB" onClick={PostOpM} >Post</Button>
          </Col>
          </Row>
          <Modal
              visible={catmodal}
              title="Pick the post's categories!"
              closable={false}
              footer={[<Button onClick={closeCatModal}>Done</Button>]}
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
                <Checkbox.Group onChange={InChangeCat} options={allInterests} />
              </div>
            </Modal>
            <Modal
              visible={maxnummodal}
              title="Pick the max number of people to start a chat!"
              closable={false}
              footer={[<Button onClick={closeMaxNumModal}>Done</Button>]}
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
                <Radio.Group onChange={InChangeNum} options={allNum} />
              </div>
            </Modal>
         </div>
        )
    }
    const mapStateToProps = (state) =>{
    
        return{
          num: state.compose.num,
          interest: state.compose.interest,
          maxnummodal: state.compose.maxnummodal,
          catmodal: state.compose.catmodal,
          token: state.login_signup.token,
          
        }
    } 
      const mapDispatchToProps = (dispatch) => {
        return{
          setMaxNumModal: (av) => dispatch(compose_actions.setMaxNumModal(av)),
          setCatModal: (av) => dispatch(compose_actions.setCatModal(av)),
          setNum: (av) => dispatch(compose_actions.setNum(av)),
          setInterest: (av) => dispatch(compose_actions.setInterest(av)),
          
        }
}

export default connect(mapStateToProps,mapDispatchToProps)(Compose);