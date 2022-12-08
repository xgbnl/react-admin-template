import {createSlice} from "@reduxjs/toolkit";
import settings from "@/settings.js";

const initData = () => {
    const states = {};
    let local = null;
    for (const item of Object.keys(settings.status)) {
        local = localStorage.getItem(item);

        if ((local === "true" || local === "false")) {
            states[item] = JSON.parse(local);
            continue;
        }
        states[item] = local ?? settings.status[item];
    }
    return states;
}

const initialState = initData();

export const SettingReducer = createSlice({
    name: 'setting',
    initialState,
    reducers: {
        setSettings(state, action) {
            const {item, value} = action.payload;
            localStorage.setItem(item, value)
            state[item] = value;
        }
    }
})

export default SettingReducer.reducer;

export const {setSettings} = SettingReducer.actions;

export const selectSetting = (state) => state.setting;