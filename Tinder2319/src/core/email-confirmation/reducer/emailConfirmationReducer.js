import {ActionTypes} from "../action/emailConfirmationActionTypes"
const initialstate = { 
    uid: undefined,
    token: undefined,
    errorMsg: undefined,
    verified: undefined,
    modalVisiblity: false,
    email:undefined,
    loading: true,
    errorMsg:undefined,
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

      case ActionTypes.SET_RESEND_EMAIL_MODAL:
        return{
          ...state, 
          modalVisiblity: payload.visible,
      };

      case ActionTypes.SET_EMAIL:
        return{
          ...state, 
          email: payload.email,
      };

      case ActionTypes.SET_LOADING:
        return{
          ...state, 
          loading: payload.loading,
      };

      case ActionTypes.SET_ERROR_MSG:
        return{
          ...state, 
          errorMsg: payload.msg,
      };
      
    default : return state;

    }
}