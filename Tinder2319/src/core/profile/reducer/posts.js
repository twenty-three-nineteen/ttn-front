import {ActionTypes} from "../action/actionTypes"
const initialstate = {
     text : undefined,
     select:undefined,

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
    default : return state;

    }
}