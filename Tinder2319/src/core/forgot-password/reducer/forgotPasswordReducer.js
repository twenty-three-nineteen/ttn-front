import {ActionTypes} from "../action/forgotPasswordActionTypes"
const initialstate = { 
    uid: undefined,
    token: undefined,
    errorMsg: undefined,
    verified: undefined,
    loading: false,
    success: false,
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

      case ActionTypes.SET_LOADING:
        return{
          ...state, 
          loading : payload.loading,
      };

      case ActionTypes.SET_SUCCESS:
        return{
          ...state, 
          success : payload.success,
      };
      
    default : return state;

    }
}