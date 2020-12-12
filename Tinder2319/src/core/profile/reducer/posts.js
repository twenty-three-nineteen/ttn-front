import {ActionTypes} from "../action/actionTypes"
const initialstate = {
     text : undefined,
     select:undefined,
     posts:[],
     del:false,

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
      case ActionTypes.SET_DEL:
        return{
          ...state, 
          del : payload.del,
      };   
    default : return state;

    }
}