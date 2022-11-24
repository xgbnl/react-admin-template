import {configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import reducer from "@/store/reducers";

const persistConfig = {
    key: 'root',
    storage,
};

const persistReducers = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistReducers,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,// 忽略序列化警告
        })
});

const persistor = persistStore(store);

export {store, persistor};