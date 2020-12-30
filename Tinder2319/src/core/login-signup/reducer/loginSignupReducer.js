import {ActionTypes} from "../action/loginSignupActionTypes";
import axios from 'axios';

const initialstate = { 
  formState: 1,
  username: undefined,
  password: undefined,
  email: undefined,
  forgotPasswordToggle: false,
  token: undefined,
  loading: false,
  s_visible:false,
  f_visible:false,
  signup_success:false,
  forgot_pass_success:false,
  logged_in:false,
  all_interests:[],
}
export default (state = initialstate, { type, payload }) => {
    switch (type) {
     
      case ActionTypes.SET_FORM_STATE:
        return{
          ...state, 
          formState : ((payload.state>3)? state.formState : payload.state),
      };

      case ActionTypes.SET_USERNAME:
        return{
          ...state, 
          username : payload.username,
      };

      case ActionTypes.SET_PASSWORD:
        return{
          ...state, 
          password : payload.password,
      };


      case ActionTypes.SET_EMAIL:
        return{
          ...state, 
          email : payload.email,
      };

      case ActionTypes.SET_TOKEN:
        return{
          ...state, 
          token : payload.token,
      };

      case ActionTypes.SET_LOADING:
        return{
          ...state, 
          loading : payload.loading,
      };

      case ActionTypes.SET_FORGOT_PASS_MODAL:
        return{
          ...state, 
          f_visible : payload.visible,
      };

      case ActionTypes.SET_SIGNUP_MODAL:
        return{
          ...state, 
          s_visible : payload.visible,
      };

      case ActionTypes.SET_SIGNUP_STATE:
        return{
          ...state, 
          signup_success : payload.success,
      };

      case ActionTypes.SET_LOGIN_STATE:
        return{
          ...state, 
          logged_in : payload.success,
      };

      case ActionTypes.SET_FORGOT_PASS_STATE:
        return{
          ...state, 
          forgot_pass_success : payload.success,
      };

      case ActionTypes.LOG_IN:
        return{
          ...state, 
          logged_in : payload.logged_in,
          username: payload.username,
          token: payload.token,
      };

      case ActionTypes.SET_ALL_INTERESTS:
        return{
          ...state, 
          all_interests: payload.list,
      };
      
      
    default : return state;

    }
}