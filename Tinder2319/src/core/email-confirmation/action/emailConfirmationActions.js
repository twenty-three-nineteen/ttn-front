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

export function setResendEmailModal(visible)
{
    
    return{
        type: ActionTypes.SET_RESEND_EMAIL_MODAL,
        payload: {visible},
    }
}

export function setEmail(email)
{
    
    return{
        type: ActionTypes.SET_EMAIL,
        payload: {email},
    }
}


export function setLoading(loading)
{   
    return{
        type: ActionTypes.SET_LOADING,
        payload: {loading},
    }
}

export function setErrorMassege(msg)
{   
    return{
        type: ActionTypes.SET_ERROR_MSG,
        payload: {msg},
    }
}