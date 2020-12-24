import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import {CloseOutlined, HomeOutlined, UserOutlined, LogoutOutlined ,WechatOutlined,DownOutlined,FireOutlined} from '@ant-design/icons';
import './menuContent.css';
import axios from 'axios';

class MenuContent extends Component {
  constructor(props) {
    super(props);
    this.handleMenu=this.handleMenu.bind(this);

    this.state = {
      current: 'home',
      showModal: false,
      message:'',
      reqs:[]
    };
  }
  componentDidMount() {
    const config = {
      headers: { 'Authorization': `Token c1a66f15f120c36731c5f19424bfa6938f99074d` }
    };

    axios.get(
      'http://localhost:8000/api/account/myRequests/',
      config
    )
    .then(res => {
      console.log(res);
      this.setState(()=>{
        return {
            reqs: res.data.map(d=>d)
        };
      });
    })
    .catch(error =>
      {
        console.log(error);
      });
  }

  handleMenu = e => {
    var count=e.key;
    var res = parseInt(count.substring(5, count.length));
    this.setState({ showModal: true, message:this.state.reqs[res].message});
    this.state.reqs.splice(res, 1);
  }

  handleSide=e=>{
    var count=e.key;
  }
  render() {
    const menu = (
      <Menu className="SmallReq" onClick={this.handleMenu}>
        {this.state.reqs.map(d=>
          <Menu.Item>
              {d.message}
          </Menu.Item>
          )}
        <Menu.Item danger>Remove all</Menu.Item>
      </Menu>
    );

    return (
      <div className="menu">
          <div className="menu-item" key={1}>
            <a
              href="http://localhost:8080/Explore"
              onClick={this.props.closeCallback}
              rel="noopener noreferrer">
              <HomeOutlined />  Home
            </a>
          </div>

          <div className="menu-item" key={2}>
            <a
              href="http://localhost:8080/ChatList"
              onClick={this.props.closeCallback}
              rel="noopener noreferrer">
              <WechatOutlined /> Chat
            </a>
          </div>

          <div className="menu-item" key={3}>
            <a
              onClick={this.props.closeCallback}>
              <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                <FireOutlined /> Requests <DownOutlined />
              </a>
            </Dropdown>
            </a>
          </div>

          <div className="menu-item" key={4}>
            <a
              href="http://localhost:8080/profile"
              onClick={this.props.closeCallback}
              rel="noopener noreferrer">
              <UserOutlined /> Profile
            </a>
          </div>
        
          <div className="menu-item" key={5}>
            <a
              href="http://localhost:8080/login_signup"
              onClick={this.props.closeCallback}
              rel="noopener noreferrer">
              <LogoutOutlined /> Logout
            </a>
          </div>

        <p className="hint">Click outside the menu to close it, or swipe it closed on touch device</p>
      </div>
    );
  }
}

export default MenuContent;
