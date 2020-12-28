import { Radio } from 'antd';
import React from "react";
import "./style.css";

class SelectorPersonSmall extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value: 1
        };
    }
  onChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <div id="personsmall" className="personsmall">
        
        <Radio.Group onChange={this.onChange} value={value}>
        <p id="TitlePerson" className="TitlePerson">Chat Participants</p>
          <Radio className="SelectorPerson" value={1}>
            1 Person
          </Radio>
          <Radio className="SelectorPerson" value={2}>
            2 Persons
          </Radio>
          <Radio className="SelectorPerson" value={3}>
            3 Persons
          </Radio>
          <Radio className="SelectorPerson"  value={4}>
            4 Persons
          </Radio>
        </Radio.Group>
      </div>
    );
  }
}

export default SelectorPersonSmall;