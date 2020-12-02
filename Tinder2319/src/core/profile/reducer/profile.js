import {ActionTypes} from "../action/actionTypes"
const initialstate = { test : "Undefined",
avatar:undefined,
age:undefined,
name:undefined,
username:undefined,
bio:undefined,
interests:[],
edit:undefined,
editinterests:false,
editavatar:false,
inte:[],

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
      case ActionTypes.SET_EDIT:
        return{
          ...state, 
          edit : payload.edit,
      };   
      case ActionTypes.SET_EDITAVATAR:
        return{
          ...state, 
          editavatar : payload.editavatar,
      };
      case ActionTypes.SET_EDITINTERESTS:
        return{
          ...state, 
          editinterests : payload.editinterests,
      };  
      case ActionTypes.SET_INTE:
        return{
          ...state, 
          inte : payload.inte,
      };  
           
    default : return state;

    }
}