import { combineReducers } from "redux";
import profile from "../profile/reducer/profile.js";
import posts from "../profile/reducer/posts.js";

export default combineReducers({
    profile,posts
});