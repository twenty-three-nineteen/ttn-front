import React from "react";
import {form, Result, Button, Typography,Modal  } from 'antd';
import {CloseOutlined,CheckOutlined , UserOutlined, LogoutOutlined ,WechatOutlined,DownOutlined,FireOutlined} from '@ant-design/icons';

class ViewRequest extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
      visible={this.props.showORnot}
      title={this.props.message}
      closable={false}
      footer={[
        <Button key="cancel" type="secondary" onClick={this.props.cancelButton} icon={<CloseOutlined />}>
          Reject
        </Button>,
        <Button key="ok" type="primary" onClick={this.props.okbtn} icon={<CheckOutlined />}>
          Accept
        </Button>
      ]}>
      <div>
        <form>
        </form> 
      </div>
      </Modal>
      );
  }
}
export default ViewRequest;