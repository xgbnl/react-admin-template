import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    lang: localStorage.getItem('lang') || 'zh_CN',
};

export const AppReducer = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLang(state, action) {
            const lang = action.payload;
            localStorage.setItem('lang', lang);
            state.lang = lang;
        }
    },
});

export default AppReducer.reducer;

export const {setLang} = AppReducer.actions;
export const selectAppLang = (state) => state.app.lang;