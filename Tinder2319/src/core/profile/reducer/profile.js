import {ActionTypes} from "../action/actionTypes"
const initialstate = { test : "Undefined",
avatar:undefined,
age:undefined,
name:undefined,
username:undefined,
bio:undefined,
interests:undefined,
}
export default (state = initialstate, { type, payload }) => {
    switch (type) {
     
      case ActionTypes.test:
          return{
            ...state, 
            test : "1"
          };

      case ActionTypes.SET_AVATAR:
        return{
          ...state, 
          avatar : payload.avatar,
      };
      case ActionTypes.SET_NAME:
        return{
          ...state, 
          name : payload.name,
      };
      case ActionTypes.SET_USERNAME:
        return{
          ...state, 
          username : payload.username,
      };
      case ActionTypes.SET_BIO:
        return{
          ...state, 
          bio : payload.bio,
      };
      case ActionTypes.SET_AGE:
        return{
          ...state, 
          age : payload.age,
      };
      case ActionTypes.SET_INTERESTS:
        return{
          ...state, 
          interests : payload.interests,
      };        
    default : return state;

    }
}