import React from 'react';
import "../styles/SmallScreen.css";

export class SmallScreen extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="SmallTotalExplore" id="SmallTotalExplore">
                <p>{this.props.text}</p>
            </div>
        );
    }
}
