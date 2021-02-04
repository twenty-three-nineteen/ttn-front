import { Select } from 'antd';
import React from 'react';
import "./style.css";
import {HOST_URL} from '../../../core/servers';
import axios from 'axios';
import {connect} from 'react-redux';

class SelectorInterest extends React.Component {
    constructor(props){
        super(props);
        this.onChange=this.onChange.bind(this);
        this.state={
          interests:[],
          selectedItems:[]
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
        var s =`1${value}`; 
        var res = s.split(",");

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
      
      onSelect(e){
        alert(e.key);
      }
    render(){
        return (
          <div className="interestcontainer">
            <Select
            mode="multiple"
            showSearch
            className="SelectorInterest"
            placeholder="Interests"
            optionFilterProp="children"
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSearch={this.onSearch}
            onSelect={this.onSelect}
            
          >
          {this.state.interests.map(d=><Option key={d} value={d}>{d}</Option>)}
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

export default connect(mapStateToProps)(SelectorInterest)