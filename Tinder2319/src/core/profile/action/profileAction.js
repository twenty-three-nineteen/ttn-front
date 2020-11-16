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
    