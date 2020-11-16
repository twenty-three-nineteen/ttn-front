import {ActionTypes} from "../action/emailConfirmationActionTypes"
const initialstate = { 
    uid: undefined,
    token: undefined,
    errorMsg: undefined,
    verified: undefined,
}
export default (state = initialstate, { type, payload }) => {
    switch (type) {
     
      case ActionTypes.SET_INFO:
        return{
          ...state, 
          uid: payload.uid,
          token: payload.token,
      };

      case ActionTypes.SET_ERROR:
        return{
          ...state, 
          errorMsg: payload.errorMsg,
      };

      case ActionTypes.SET_VERIFIED:
        return{
          ...state, 
          verified: payload.verified,
      };

      
    default : return state;

    }
}