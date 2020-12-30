import {ActionTypes} from "../actions/ActionTypes"
const initialstate = { test : "Undefined",
maxnummodal: false,
catmodal:false,
interest:[],
num:[],

}
export default (state = initialstate, { type, payload }) => {
    switch (type) {
     
      case ActionTypes.test:
          return{
            ...state, 
            test : "1"
          };

          case ActionTypes.SET_MAXNUMMODAL:
            return{
              ...state, 
              maxnummodal : payload.maxnummodal,
          };
          
          case ActionTypes.SET_CATMODAL:
            return{
              ...state, 
              catmodal : payload.catmodal,
          };
          
          case ActionTypes.SET_INTEREST:
            return{
              ...state, 
              interest : payload.interest,
          };
          
          case ActionTypes.SET_NUM:
            return{
              ...state, 
              num : payload.num,
          };
      
           
    default : return state;

    }
}