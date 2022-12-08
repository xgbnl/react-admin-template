import {combineReducers} from "redux";
import UserReducer from "@/app/reducers/user/UserReducer.js";
import AppReducer from "@/app/reducers/app/AppReducer.js";
import {SettingReducer} from "@/app/reducers/setting/settingReducer.js";

const reducers = combineReducers({
    user: UserReducer,
    app: AppReducer,
    setting: SettingReducer,
})

export default reducers;