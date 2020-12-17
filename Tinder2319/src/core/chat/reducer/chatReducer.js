import {ActionTypes} from "../action/chatActionTypes"
const initialstate = { 
  id : undefined,
  users : [],
  messages:[],
  chat: {},
  socket: undefined,
  last_message: undefined,
  users_recieved:false,
  chat_recieved:false,
  socket_connected: false,
}
export default (state = initialstate, { type, payload }) => {
    switch (type) {
      case ActionTypes.USERS_RECIEVED:
        return{
          ...state, 
          users_recieved: payload.status,
          users: payload.users,
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
        };

      case ActionTypes.CHAT_RECIEVED:
      return{
          ...state, 
          messages: payload.messages,
          chat_recieved:true,
          lastMessage: payload.messages[0].id,
      };

      // case ActionTypes.GET_CHAT_USERS:
      //   return{
      //     ...state, 
      //     users : payload.users,
      //   };

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