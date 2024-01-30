import walletReducer, { walletSliceName } from "../slices/wallet.slice";
import commonReducer, { commonSliceName } from "../slices/common.slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";


const rootReducer = combineReducers({
    [commonSliceName]: commonReducer,
    [walletSliceName]: walletReducer,
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: [walletSliceName],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: import.meta.env.REACT_ENV === "development",
});

export const persistor = persistStore(store);

export const { dispatch } = store;

export default store;
