/* eslint-disable no-unused-vars */

import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from './userSlice';


export const ReduxStore = configureStore({
    reducer: {
        user: userSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false, // <- add this option
    })
})