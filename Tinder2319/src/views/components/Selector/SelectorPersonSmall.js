import { Radio } from 'antd';
import React from "react";
import "./style.css";

class SelectorPersonSmall extends React.Component {
    constructor(props){
        super(props);
        
    }
    onChange = e => {
      // alert(e.target.value+1);
      console.log('radio checked', e.target.value);
      this.props.numChanger(e.target.value);    
    };

  render() {
    return (
      <div className="interestcontainer">
        <Radio.Group onChange={this.onChange} value={this.props.numberOfPersons}>
          <Radio className="SelectorPerson" value={2}>
            2 Person
          </Radio>
          <Radio className="SelectorPerson" value={3}>
            3 Persons
          </Radio>
          <Radio className="SelectorPerson" value={4}>
            4 Persons
          </Radio>
          <Radio className="SelectorPerson"  value={5}>
            5 Persons
          </Radio>
        </Radio.Group>
      </div>
    );
  }
}

export default SelectorPersonSmall;