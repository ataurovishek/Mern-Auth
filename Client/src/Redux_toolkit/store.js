/* eslint-disable no-unused-vars */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const combineReducer = combineReducers({ user: userSlice.reducer })


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const PersistReducer = persistReducer(persistConfig, combineReducer)

export const ReduxStore = configureStore({
    reducer: PersistReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // <- add this option
    })
})

export const PeristStore = persistStore(ReduxStore);