import {ActionTypes} from "../action/createProfileActionTypes"
const initialstate = { 
  interests:[],
  slider: null,
  profile_info:{
    name: undefined,
    birth: undefined,
    bio: undefined,
  },
  
  avatar: 1,
  visible: false,
}
export default (state = initialstate, { type, payload }) => {
    switch (type) {
     
      case ActionTypes.SET_SLIDER:
        return{
          ...state, 
          slider : payload.slider,
      };

      case ActionTypes.SET_INTERESTS:
          return{
            ...state, 
            interests : payload.interests,
          };

      case ActionTypes.SET_PROFILE_INFO:
        return{
          ...state, 
          profile_info : {
            name: payload.values.nickname,
            bio : payload.values.bio,
            birth : payload.values.birth.format('YYYY-MM-DD'),
            //month+1
            //YYYY-MM-DD HERE
            
          }
      };

      case ActionTypes.SET_AVATAR:
        return{
          ...state, 
          avatar : payload.avatar,
      };

      case ActionTypes.SET_MODAL:
        return{
          ...state, 
          visible: payload.visible,
      };

      
        
    default : return state;

    }
}