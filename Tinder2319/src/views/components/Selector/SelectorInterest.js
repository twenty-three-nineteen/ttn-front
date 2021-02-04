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
          selectedItems:"",
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
      onSelect(e){
        
        var messagedimo=document.getElementById('MySelect').value;
        alert(messagedimo);
      }
      onDelete(e){
        alert(e);
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
            id="MySelect"
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