import {ActionTypes} from "./loginSignupActionTypes"


export function setFormState(state){
    return {
        type : ActionTypes.SET_FORM_STATE,
        payload: { state },
    };
}

export function setUsername(username){
    return {
        type : ActionTypes.SET_USERNAME,
        payload: { username },
    };
}

export function setPassword(password){
    return {
        type : ActionTypes.SET_PASSWORD,
        payload: { password },
    };
}


export function setEmail(email){
    return {
        type : ActionTypes.SET_EMAIL,
        payload: { email },
    };
}

export function setToken(token){
    return {
        type : ActionTypes.SET_TOKEN,
        payload: { token },
    };
}

export function setLoading(loading){
    return {
        type : ActionTypes.SET_LOADING,
        payload: { loading },
    };
}

export function setForgotPasswordModal(visible){
    return {
        type : ActionTypes.SET_FORGOT_PASS_MODAL,
        payload: { visible },
    };
}

export function setSignUpState(success){
    return {
        type : ActionTypes.SET_SIGNUP_STATE,
        payload: { success },
    };
}

export function setLoginState(success){
    return {
        type : ActionTypes.SET_LOGIN_STATE,
        payload: { success },
    };
}

export function setForgotPassState(success){
    return {
        type : ActionTypes.SET_FORGOT_PASS_STATE,
        payload: { success },
    };
}

export function setSignUpModal(visible){
    return {
        type : ActionTypes.SET_SIGNUP_MODAL,
        payload: { visible },
    };
}

export function setAllInterests(list){
    return{
        type: ActionTypes.SET_ALL_INTERESTS,
        payload: { list },
    }
}

