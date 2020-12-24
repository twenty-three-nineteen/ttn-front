import { combineReducers } from "redux";
import profile from "../profile/reducer/profile.js";
import posts from "../profile/reducer/posts.js"
import email_confirmation from "../email-confirmation/reducer/emailConfirmationReducer";
import create_profile from "../create-profile/reducer/createProfileReducer";
import login_signup from "../login-signup/reducer/loginSignupReducer";
import forgot_password from "../forgot-password/reducer/forgotPasswordReducer";
import chat from "../chat/reducer/chatReducer";


export default combineReducers({
    profile,
    create_profile,
    email_confirmation,
    login_signup,
    posts,
    chat,


    forgot_password,

});