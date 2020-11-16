import React from 'react';
import '../styles/BehindOpeningMessage.css';

class BehindOpeningMessage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="BOM" id="BOM">
                <p className="txt">{this.props.text}</p>
            </div>
        );
    }
}
export default BehindOpeningMessage;
