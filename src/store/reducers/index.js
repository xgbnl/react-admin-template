import {combineReducers} from "redux";
import {userReducer} from "@/store/reducers/user/UserReducer.js";

const Reducer = combineReducers({
    user: userReducer,
});

export default Reducer;