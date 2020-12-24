import React from "react";
import {form, Result, Button, Typography,Modal  } from 'antd';
import "../styles/Req.css";

export class ReqOpeningMessageModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleOk=this.handleOk.bind(this);
    this.cancelButton=this.cancelButton.bind(this);
    

    this.state={
      showModal: this.props.showORnot,
    };
  }

  handleOk(){
    console.log("handleOK");
    this.cancelButton();
  }

  cancelButton()
  {
    this.setState(()=>{
      return {
          showModal: false
      };
    });
    // console.log(id);
  }

  render() {
    return (
        <div className="App">
          <Modal
          visible={this.state.showModal}
          title="Type your message"
          closable={false}
          footer={[
            <Button key="cancel" type="secondary" onClick={this.cancelButton}>
              Cancel
            </Button>,
            <Button key="ok" type="primary" onClick={this.handleOk}>
              Ok
            </Button>
          ]}>
          <div>
            <form>
                <textarea className="messagedimo" type="text" id="messagedimo" name="messagedimo" rows="10"></textarea>
            </form> 
          </div>
          </Modal>
        </div>
      );
  }
}
