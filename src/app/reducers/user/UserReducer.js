import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {loginReq, logoutReq, getUser} from "@api/user/index.js";
import {getToken, setToken, removeToken} from "@utils/auth.js";

// 初始状态
const initialState = {
    token: getToken() || '',
    name: '',
    avatar: '',
    routes: [
        'Permission',
        'Role',
        'Menu',
    ],
    buttons: [],
};

// 登录
export const loginAsync = createAsyncThunk(
    'user/loginAsync',
    ({name, password}) => loginReq(name, password),
);

// 注销
export const logoutAsync = createAsyncThunk(
    'user/logoutAsync',
    () => logoutReq
)

// 获取用户
export const getUserAsync = createAsyncThunk(
    'user/getUserAsync',
    () => getUser,
);

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        storeToken: (state, action) => {
            const token = action.payload;
            state.token = token;
            setToken(token);
        }
    },
    extraReducers(builder) {
        builder.addCase(loginAsync.fulfilled, (state, action) => {

            const token = action.payload;
            state.token = token;
            setToken(token);

        }).addCase(getUserAsync.fulfilled, (state, action) => {

            const {name, avatar, routes, buttons} = action.payload;

            state.name = name;
            state.avatar = avatar;
            state.routes = routes;
            state.buttons = buttons;
        }).addCase(logoutAsync.fulfilled, (state, action) => {
            // 清除信息
            state.name = '';
            state.avatar = '';
            state.token = '';
            state.routes = [];
            state.buttons = [];
            removeToken();
        })
    }
});

// 暴露reducer
export default userReducer.reducer;

export const {storeToken} = userReducer.actions;

// 暴露用于读取当前状态数据的select函数
export const selectUser = (state) => state.user;

