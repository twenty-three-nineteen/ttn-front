import { Select } from 'antd';
import React from 'react';
import "./style.css";
import {HOST_URL} from '../../../core/servers';
import axios from 'axios';
import {connect} from 'react-redux';

class SelectorInterest extends React.Component {
    constructor(props){
        super(props);
        this.state={
          interests:[],
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
            interests: res.data.map(d=>d)
          };
        });
      })
      .catch(error =>
        {
          alert(error);
        });
        
    }
      onSelect=e=>{
        document.getElementById('replaceDimo').innerText = document.getElementById('replaceDimo').innerText+e.toString()+",";
        this.props.myChange();
      }
      onDelete=e=>{
        var str = document.getElementById('replaceDimo').innerText;
        var res = str.split(",");
        var i;
        var final="";
        for (i = 0; i < res.length-1; i++) {
          if(res[i]!=e.toString()){
            final=final+res[i]+",";
          }
        } 
        document.getElementById('replaceDimo').innerText=final;
        this.props.myChange();
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
            onSelect={this.onSelect}
            onDeselect={this.onDelete}
            >
            {this.state.interests.map(d=><Option key={d.id} value={d.id}>{d.subject}</Option>)}
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