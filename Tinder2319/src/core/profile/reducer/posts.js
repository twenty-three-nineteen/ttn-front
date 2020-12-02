import {ActionTypes} from "../action/actionTypes"
const initialstate = {
     text : undefined,
     select:undefined,
     posts:[],

}
export default (state = initialstate, { type, payload }) => {
    switch (type) {
    
      case ActionTypes.SET_SELECT:
        return{
          ...state, 
          select : payload.select,
      };
      case ActionTypes.SET_TEXT:
        return{
          ...state, 
          text : payload.text,
      };  
      case ActionTypes.SET_POSTS:
        return{
          ...state, 
          posts : payload.posts,
      };     
    default : return state;

    }
}