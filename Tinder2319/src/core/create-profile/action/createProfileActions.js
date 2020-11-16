import {ActionTypes} from "./createProfileActionTypes"


export function setInterests(interests){
    return {
        type : ActionTypes.SET_INTERESTS,
        payload: { interests },
    };
}

export function setSlider(slider){
    return{
        type: ActionTypes.SET_SLIDER,
        payload: { slider },
    }
}

export function setProfileInfo(values){
    return{
        type: ActionTypes.SET_PROFILE_INFO,
        payload: { values },
    }
}

export function setAvatar(avatar){
    return{
        type: ActionTypes.SET_AVATAR,
        payload: { avatar },
    }
}

export function setModal(visible){
    return{
        type: ActionTypes.SET_MODAL,
        payload: { visible },
    }
}