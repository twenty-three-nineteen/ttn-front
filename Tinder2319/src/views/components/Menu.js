import React from "react";
import {CloseOutlined, HomeOutlined, UserOutlined, LogoutOutlined ,WechatOutlined,DownOutlined,FireOutlined} from '@ant-design/icons';
import { Menu, Dropdown,message } from 'antd';
import "../styles/Toolbar.css";
import axios from 'axios';
import ViewRequest from "./ViewRequest.js";
import {HOST_URL} from '../../core/servers';
import {connect} from 'react-redux';



class Toolbar extends React.Component {
  constructor(props){
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.handleMenu=this.handleMenu.bind(this);
    this.cancelButton=this.cancelButton.bind(this);
    this.handleOk=this.handleOk.bind(this);
    
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
  

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  handleMenu = e => {
    var count=e.key;
    var res = parseInt(count.substring(5, count.length));
    this.setState({ showModal: true, message:this.state.reqs[res].message});
    this.state.reqs.splice(res, 1);
  }

  cancelButton(){
    message.error('Rejected successfully!');
    this.setState({ showModal: false});
  }

  handleOk(){
    message.success('Accepted successfully!');
    this.setState({ showModal: false});
  }

  render() {
    const menu = (
      <Menu onClick={this.handleMenu}>
        {this.state.reqs.map(d=>
          <Menu.Item>
              {d.message}
          </Menu.Item>
          )}
        <Menu.Item danger>Remove all</Menu.Item>
      </Menu>
    );
    const { current } = this.state;
    return (
      <div>
        <ViewRequest message={this.state.message} cancelButton={this.cancelButton} okbtn={this.handleOk} showORnot={this.state.showModal}></ViewRequest>
        <Menu className="toolbar" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="chat" icon={<WechatOutlined />}>
            <a href="http://localhost:8080/ChatList" rel="noopener noreferrer">
              Chat
            </a>
          </Menu.Item>
          <Menu.Item key="req" icon={<FireOutlined />}>
            <Dropdown overlay={menu}>
              <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Requests <DownOutlined />
              </a>
            </Dropdown>
          </Menu.Item>
          
          <Menu.Item className="logoutToolbar" key="logout" icon={ <LogoutOutlined />}>
            <a href="http://localhost:8080/login_signup" rel="noopener noreferrer">
              Log Out
            </a>
          </Menu.Item>
          <Menu.Item  style={{float: 'right'}} key="profile" icon={<UserOutlined />}>
            <a href="http://localhost:8080/profile" rel="noopener noreferrer">
              Profile
            </a>
          </Menu.Item>
          
        </Menu>
       
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

export default connect(mapStateToProps)(Toolbar)