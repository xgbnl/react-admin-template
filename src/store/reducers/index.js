import {combineReducers} from "redux";
import {userReducer} from "@/store/reducers/user/UserReducer.js";

export default combineReducers({
    user: userReducer,
});
