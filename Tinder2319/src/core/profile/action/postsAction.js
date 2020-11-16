import {ActionTypes} from "./actionTypes"
export function setText(text){
    return{
    type: ActionTypes.SET_TEXT,
    payload: { text },
    }
}
export function setSelect(select){
    return{
    type: ActionTypes.SET_SELECT,
    payload: { select },
    }
}