/* eslint-disable no-unused-vars */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import { persistReducer,persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';



const rootReducer = combineReducers({ user: userSlice.reducer })

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const ReduxStore = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // <- add this option
    })
})


export  const PersistStore = persistStore(ReduxStore)