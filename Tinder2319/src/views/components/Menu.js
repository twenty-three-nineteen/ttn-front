import React from "react";
import {FormOutlined, HomeOutlined, UserOutlined, LogoutOutlined ,WechatOutlined,DownOutlined,FireOutlined} from '@ant-design/icons';
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
    this.deleteAll=this.deleteAll.bind(this);

    this.state = {
      current: 'home',
      showModal: false,
      message:'',
      reqs:[],
      reqid:0
    };
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
  

  handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
  };

  handleMenu = e => {
    var count=e.key;
    var res = parseInt(count.substring(5, count.length));
    this.setState({ showModal: true, message:this.state.reqs[res].message,reqid:this.state.reqs[res].id});
    this.state.reqs.splice(res, 1);
  }

  cancelButton(){
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
  logout(){
    message.success('Logged out successfully!');
    localStorage.clear();
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
      <Menu onClick={this.handleMenu}>
        {this.state.reqs.map(d=>
          <Menu.Item>
              {d.message}
          </Menu.Item>
          )}
        <Menu.Item onClick={this.deleteAll} danger>Remove all</Menu.Item>
      </Menu>
    );
    const { current } = this.state;
    return (
      <div>
        <ViewRequest message={this.state.message} cancelButton={this.cancelButton} okbtn={this.handleOk} showORnot={this.state.showModal}></ViewRequest>
        <Menu className="toolbar" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="home" icon={<HomeOutlined />}>
          <a href="http://localhost:8080/explore" rel="noopener noreferrer">
          Home
          </a>
          </Menu.Item>
          <Menu.Item key="chat" icon={<WechatOutlined />}>
            <a href="http://localhost:8080/Chat" rel="noopener noreferrer">
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
          <Menu.Item key="compose" icon={<FormOutlined />}>
            <a href="http://localhost:8080/compose" rel="noopener noreferrer">
              Compose
            </a>
          </Menu.Item>
          
          <Menu.Item onClick={this.logout} className="logoutToolbar" key="logout" icon={ <LogoutOutlined />}>
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
    logged_in: state.login_signup.logged_in
  }
} 

export default connect(mapStateToProps)(Toolbar)