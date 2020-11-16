import {ActionTypes} from "./emailConfirmationActionTypes"


export function setInfo(uid, token){
    return {
        type : ActionTypes.SET_INFO,
        payload: { uid, token },
    };
}

export function setError(errorMsg)
{
    return{
        type: ActionTypes.SET_ERROR,
        payload: {errorMsg},
    }
}

export function setVerifiedState(verified)
{
    return{
        type: ActionTypes.SET_VERIFIED,
        payload: {verified},
    }
}

