import React from 'react';
import '../styles/OpeningMessage.css';

class OpeningMessage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="OM" id="OM">
                <p className="txt">{this.props.text}</p>
            </div>
        );
    }
}
export default OpeningMessage;
