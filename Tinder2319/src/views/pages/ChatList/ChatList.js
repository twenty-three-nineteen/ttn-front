import React from 'react';
import axios from 'axios';
import "../../styles/ChatList/ChatList.css";
class ChatList extends React.Component {
  constructor(props){
    super(props);
    this.state={
      chats:[]
    };
  }
  componentDidMount() {
    const config = {
        headers: { 'Authorization': `Token 1ef08370c97f935b4e35703db3527b92368a8ee7` }
    };

    axios.get(
      `http://localhost:8000/api/chat`,
      config
    )
    .then(res => {
      console.log(res);
      this.setState(()=>{
        return {
            chats: res.data.map(d=>d)
        };
      });
    })
    .catch(error =>
      {
        console.log(error);
      });
}
  render() {
      return (
        <div>
        <img className="avatarChat" src={require('../../../assessts/images/avatars/av (1).png')}></img>
        {this.state.chats.map(d=>
          <p className="Chatbox" id="Chatbox">
            {d.participants[1].username}          
          </p>
          )}
        </div>
      );
  }
}
export default ChatList;