import {ActionTypes} from "./actionTypes"

export function test(){
    return {
        type : ActionTypes.test
    };
}
export function setAvatar(avatar){
    return{
    type: ActionTypes.SET_AVATAR,
    payload: { avatar },
    }
}
export function setAge(age){
    return{
    type: ActionTypes.SET_AGE,
    payload: { age },
    }
}
export function setBio(bio){
    return{
    type: ActionTypes.SET_BIO,
    payload: { bio },
    }
}
export function setInterests(interests){
    return{
    type: ActionTypes.SET_INTERESTS,
    payload: { interests },
    }
}
export function setUserName(username){
    return{
    type: ActionTypes.SET_USERNAME,
    payload: { username },
    }
}
export function setName(name){
    return{
    type: ActionTypes.SET_NAME,
    payload: { name },
    }
}
export function setEdit(edit){
    return{
    type: ActionTypes.SET_EDIT,
    payload: { edit },
    }
}
export function setEditAvatar(editavatar){
    return{
    type: ActionTypes.SET_EDITAVATAR,
    payload: { editavatar },
    }
}
export function setEditInterests(editinterests){
    return{
    type: ActionTypes.SET_EDITINTERESTS,
    payload: { editinterests },
    }
}
export function getUser(){
    return{
        type: ActionTypes.GET_USER
    }
    
    
}
export function setInte(inte){
    return{
    type: ActionTypes.SET_INTE,
    payload: { inte },
    }
}
export function setDelAc(delac){
    return{
    type: ActionTypes.SET_DELAC,
    payload: { delac },
    }
}
export function setOkB(okb){
    return{
    type: ActionTypes.SET_OKB,
    payload: { okb },
    }
}