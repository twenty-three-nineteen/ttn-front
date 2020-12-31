import {ActionTypes} from "./ActionTypes"

export function test(){
    return {
        type : ActionTypes.test
    };
}
export function setMaxNumModal(maxnummodal){
    return{
    type: ActionTypes.SET_MAXNUMMODAL,
    payload: { maxnummodal },
    }
}
export function setCatModal(catmodal){
    return{
    type: ActionTypes.SET_CATMODAL,
    payload: { catmodal },
    }
}
export function setInterest(interest){
    return{
    type: ActionTypes.SET_INTEREST,
    payload: { interest },
    }
}
export function setNum(num){
    return{
    type: ActionTypes.SET_NUM,
    payload: { num },
    }
}