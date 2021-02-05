import React, { Component } from 'react';
import { Menu, Dropdown ,message} from 'antd';
import {CloseOutlined, HomeOutlined, UserOutlined, LogoutOutlined ,WechatOutlined,DownOutlined,FireOutlined} from '@ant-design/icons';
import './menuContent.css';
import axios from 'axios';
import {connect} from 'react-redux';
import ViewRequest from "../ViewRequest.js";
import {HOST_URL} from '../../../core/servers.js';

class MenuContent extends Component {
  constructor(props) {
    super(props);
    this.handleMenu=this.handleMenu.bind(this);
    this.cancelButton=this.cancelButton.bind(this);
    this.handleOk=this.handleOk.bind(this);
    this.deleteAll=this.deleteAll.bind(this);

    this.state = {
      current: 'home',
      showModal: false,
      message:'',
      reqs:[],
      reqid:0
    };
  }
  logout(){
    message.success('Logged out successfully!');
    localStorage.clear();
  }
  componentDidMount() {
    const config = {
      headers: { 'Authorization': `Token ${this.props.token}` }
    };

    axios.get(
      `${HOST_URL}/api/account/myRequests/`,
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
    this.setState({ showModal: true, message:this.state.reqs[res].message,reqid:this.state.reqs[res].id});
    this.state.reqs.splice(res, 1);
  }
  cancelButton(){
    alert(this.props.token);
    
    message.error('Rejected successfully!');
    this.setState({ showModal: false});
    axios.put(`${HOST_URL}/api/account/response_request/rejected/${this.state.reqid}`, 
    {
    },
    { 
      headers: {
        'Authorization': `Token ${this.props.token}`,
        'Content-Type':'application/json',
      }
   })


    .then(function (response) {

    })
    .catch(error =>
      {
        console.log(error);
      });
  }

  handleOk(){
    this.setState({ showModal: false});
    axios.put(`${HOST_URL}/api/account/response_request/accepted/${this.state.reqid}`, 
    {
    },
    {
      headers: {
        'Authorization': `Token ${this.props.token}`,
        'Content-Type':'application/json',
      }
   })


    .then(function (response) {

    })
    .catch(error =>
      {
        console.log(error);
      });
      message.success('Accepted successfully!');

  }
  handleSide=e=>{
    var count=e.key;
  }
  deleteAll(){
    for(var x in this.state.reqs.map(d=>d)){
      axios.put(`${HOST_URL}/api/account/response_request/rejected/${this.state.reqs[x].id}`, 
    {
    },
    {
      headers: {
        'Authorization': `Token ${this.props.token}`,
        'Content-Type':'application/json',
      }
   })
    .then(function (response) {

    })
    .catch(error =>
      {
        console.log(error);
      });

    }
    message.success('Removed successfully!');
    this.setState({ reqs: []});
     
  }
  render() {
    const menu = (
      <Menu className="SmallReq" onClick={this.handleMenu}>
        {this.state.reqs.map(d=>
          <Menu.Item>
              {d.message}
          </Menu.Item>
          )}
        <Menu.Item onClick={this.deleteAll} danger>Remove all</Menu.Item>
      </Menu>
    );

    return (
      <div className="menu">
      <ViewRequest message={this.state.message} cancelButton={this.cancelButton} okbtn={this.handleOk} showORnot={this.state.showModal}></ViewRequest>
          <div className="menu-item" key={1}>
            <a
              href="/Explore"
              onClick={this.props.closeCallback}
              rel="noopener noreferrer">
              <HomeOutlined />  Home
            </a>
          </div>

          <div className="menu-item" key={2}>
            <a
              href="/Chat"
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
              href="/profile"
              onClick={this.props.closeCallback}
              rel="noopener noreferrer">
              <UserOutlined /> Profile
            </a>
          </div>
        
          <div className="menu-item" key={5}>
            <a
              href="/login_signup"
              onClick={this.logout}
              rel="noopener noreferrer">
              <LogoutOutlined /> Logout
            </a>
          </div>

        <p className="hint">Click outside the menu to close it, or swipe it closed on touch device</p>
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

export default connect(mapStateToProps)(MenuContent)