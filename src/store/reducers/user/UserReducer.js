import {createSlice} from "@reduxjs/toolkit";

export const userReducer = createSlice({
    name: 'user',
    initialState:{
        role: [],
    },
    reducers:{
        login(state,action){

        },
        logout(state,action){

        }
    }
});

export const {login,logout} = userReducer.actions;

export default userReducer.reducer;