import { Select } from 'antd';
import React from 'react';
import { LeftOutlined,LeftCircleOutlined} from '@ant-design/icons';
import "./style.css";
import CheeseburgerMenu from 'cheeseburger-menu';
import HamburgerMenu from 'react-hamburger-menu';
import SelectorInterest from "../../components/Selector/SelectorInterest.js";
import SelectorPerson from "../../components/Selector/SelectorPerson.js";

class Filter extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
            <LeftOutlined onClick={this.props.clicked} id="mybar" className="mybar"></LeftOutlined>
            </div>
        );
    }
}

export default Filter