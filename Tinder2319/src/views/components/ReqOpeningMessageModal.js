import React from "react";
import {form, Result, Button, Typography,Modal  } from 'antd';
import "../styles/Req.css";

export class ReqOpeningMessageModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="App">
          <Modal
          visible={this.props.showORnot}
          title="Type your message"
          closable={false}
          footer={[
            <Button key="cancel" type="secondary" onClick={this.props.cancelButton}>
              Cancel
            </Button>,
            <Button key="ok" type="primary" onClick={this.props.okbtn}>
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
