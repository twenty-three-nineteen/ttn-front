import React from 'react';
import '../styles/BehindOpeningMessage.css';
import {Row,Col} from 'antd';

class BehindOpeningMessage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="BOM" id="BOM">
            <Row>
            <Col><div className="Postsdiv2" style={{height:"500px",width:"400px",justify:"center"}}>
     
            <Row className = " RowStyle"  justify="center" style={{backgroundColor:"rgb(0,0,0,0.36)",height:"450px"}} >
              
              <p style={{color : "whitesmoke",fontSize: "20px",width:"200px",overflowWrap: "break-word",padding:"10px",textAlign:"center",textJustify:"center"}}>Hello
              </p>
             </Row>
             
            </div></Col>
            </Row>
            </div>
        );
    }
}
export default BehindOpeningMessage;
