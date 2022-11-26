import {combineReducers} from "redux";
import UserReducer from "@/app/reducers/user/UserReducer.js";

const reducers = combineReducers({
    user: UserReducer,
})

export default reducers;