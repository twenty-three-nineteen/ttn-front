import {ActionTypes} from "../action/actionTypes"
const initialstate = {
     text : undefined,
     select:undefined,
     posts:[],
     del:false,
     page: 1,
     categories:[],
     maxNumOfMember: undefined,

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
          posts : state.posts.concat(payload.posts),
      };  
      case ActionTypes.SET_DEL:
        return{
          ...state, 
          del : payload.del,
      };   
      case ActionTypes.SET_PAGE:
        return{
          ...state, 
          page : payload.page,
      }; 
      case ActionTypes.ADD_PAGE:
        return{
          ...state, 
          page : state.page+1,
      }; 
      case ActionTypes.SET_CATEGORIES:
        return{
          ...state, 
          categories : payload.categories,
      }; 
      case ActionTypes.SET_MAXNUMOFMEMBER:
        return{
          ...state, 
          maxNumOfMember : payload.maxNumOfMember,
      };   
    default : return state;

    }
}