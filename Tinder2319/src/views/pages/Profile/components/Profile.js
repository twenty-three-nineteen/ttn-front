import React from "react";
import ReactDOM from "react-dom";
import {form, Result, Button, Typography,Modal  } from 'antd';

export class EditAvatarModal extends React.Component{

    constructor (props) {
        super(props)
    }
    render(){
        return(
            <div className="App">
            <Modal
            visible={this.props.showORnot}
            title="Type your message"
            closable={true}
            footer={[
                
                <Button key="ok" type="primary" >
                Ok
                </Button>,
            ]}>
            <div>
                <form>
                    <label for="message">Message:</label>
                    <input type="text" id="message" name="message"></input><br></br>
                </form> 
            </div>
            </Modal>
            </div>
        );
    }
}