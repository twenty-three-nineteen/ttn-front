import React from "react";
import {form, Result, Button, Typography,Modal  } from 'antd';

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
                <label for="messagedimo">Message:</label>
                <input type="text" id="messagedimo" name="messagedimo"></input><br></br>
            </form> 
          </div>
          </Modal>
        </div>
      );
  }
}
