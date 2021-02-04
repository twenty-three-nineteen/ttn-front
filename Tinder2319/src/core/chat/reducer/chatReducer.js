import {ActionTypes} from "../action/chatActionTypes"
const initialstate = { 
  id : undefined,
  socket: undefined,
  last_message: undefined,
  users : [],
  usersParsed: {},
  messages:[],
  chat: {},
  date: undefined,
  op: undefined,
  users_recieved:false,
  chat_recieved:false,
  socket_connected: false,
  sent_to_chat:0,
  loadedNumber:0,
  all_chat_loaded:false,
  
}
export default (state = initialstate, { type, payload }) => {
    switch (type) {
      case ActionTypes.SENT_TO_CHAT:
        return{
          ...state, 
          sent_to_chat: payload.id,
      };

      case ActionTypes.INFO_RECIEVED:
        return{
          ...state, 
          op:payload.op,
          date:payload.date,
          users_recieved: payload.status,
          users: payload.users,
          usersParsed:payload.usersParsed,
      };

      case ActionTypes.SOCKET_CONNECTED:
        return{
          ...state, 
          socket_connected: payload.status,
      };


      case ActionTypes.ADD_MESSAGE:
        return{
          ...state, 
          messages: state.messages.concat(payload.message),
          loadedNumber: state.loadedNumber+1,
        };

      case ActionTypes.CHAT_RECIEVED:
      return{
          ...state, 
          messages: payload.messages.concat(state.messages),
          loadedNumber:state.loadedNumber+payload.messages.length,
          all_chat_loaded: !(payload.messages.length),
          chat_recieved:true,
          
      };

      case ActionTypes.CHANGE_CHAT:
        return{
          ...state, 
          users : [],
          usersParsed: {},
          messages:[],
          date: undefined,
          op: undefined,
          users_recieved:false,
          chat_recieved:false,
          loadedNumber:0,
        };

      case ActionTypes.LAST_CHAT_RECIEVED:
      return{
          ...state, 
          messages: state.messages.concat(state.messages),
      };

      case ActionTypes.SAVE_SOCKET:
      return{
          ...state, 
          socket: payload.socket,
      };

      case ActionTypes.SET_CHATID:
      return{
          ...state, 
          id: payload.id,
      };
   
    default : return state;

    }
}