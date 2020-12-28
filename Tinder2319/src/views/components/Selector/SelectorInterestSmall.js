import { Select } from 'antd';
import React from 'react';
import "./style.css";
import {HOST_URL} from '../../../core/servers';
import axios from 'axios';
import {connect} from 'react-redux';

class SelectorInterestSmall extends React.Component {
    constructor(props){
        super(props);
        this.state={
          interests:[]
        };
    }
    componentDidMount() {
      const config = {
          headers: { 'Authorization': `Token ${this.props.token}` }
      };
      axios.get(

        `${HOST_URL}/api/account/interests/`,
        config
      )
      .then(res => {
        this.setState(()=>{
          return {
            interests: res.data.map(d=>d.subject)
          };
        });
      })
      .catch(error =>
        {
          alert(error);
        });
        
  }
    onChange(value) {
        console.log(`selected ${value}`);
      }
      
    onBlur() {
        console.log('blur');
      }
      
    onFocus() {
        console.log('focus');
      }
      
    onSearch(val) {
        console.log('search:', val);
      }
    render(){
        return (
          <div id="interestsmall" className="interestsmall">
            <Select
            mode="multiple"
            allowClear
            showSearch
            className="SelectorInterest"
            placeholder="Interests"
            optionFilterProp="children"
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSearch={this.onSearch}
          >
          {this.state.interests.map(d=><Option value={d}>{d}</Option>)}
          </Select>
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

export default connect(mapStateToProps)(SelectorInterestSmall)