import {ActionTypes} from "./forgotPasswordActionTypes"


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


export function setLoading(loading)
{
    return{
        type: ActionTypes.SET_LOADING,
        payload: {loading},
    }
}

export function setSuccess(success)
{
    return{
        type: ActionTypes.SET_SUCCESS,
        payload: {success},
    }
}

