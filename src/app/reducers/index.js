import {combineReducers} from "redux";
import UserReducer from "@/app/reducers/user/UserReducer.js";
import AppReducer from "@/app/reducers/app/AppReducer.js";

const reducers = combineReducers({
    user: UserReducer,
    app: AppReducer,
})

export default reducers;