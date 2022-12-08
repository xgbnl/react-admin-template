import {createSlice} from "@reduxjs/toolkit";
import settings from "@/settings.js";

const create = () => {
    const states = {};
    Object.keys(settings.status).forEach(item => {
        states[item] = localStorage.getItem(item) || settings.status[item];
    })
    return states;
}

const initialState = create();

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