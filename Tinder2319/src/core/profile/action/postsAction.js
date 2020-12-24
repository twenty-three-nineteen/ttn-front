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
export function setPosts(posts){
    return{
    type: ActionTypes.SET_POSTS,
    payload: { posts },
    }
}
 
export function setDel(del){
    return{
    type: ActionTypes.SET_DEL,
    payload: { del },
    }
}
export function setPage(page){
    return{
    type: ActionTypes.SET_PAGE,
    payload: { page },
    }
}
export function addPage(){
    return{
    type: ActionTypes.ADD_PAGE,
    payload: {},
    }
}
