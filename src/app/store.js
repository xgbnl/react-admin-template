import {configureStore} from "@reduxjs/toolkit";
import reducers from "@/app/reducers/index.js";

const store = configureStore({
    reducer: reducers,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,// 忽略序列化警告
        })
});

export default store;