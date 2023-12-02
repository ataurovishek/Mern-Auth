import { createSlice } from "@reduxjs/toolkit";



export const userSlice = createSlice({
    name: 'user',
    initialState: {
        currentUser: null,
        Loading: false,
        error: false
    },
    reducers: {
        signInStart: (state) => {
            state.Loading = true
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload,
                state.Loading = false,
                state.error = false
        },
        signInFailure: (state, action) => {
            state.Loading = false,
            state.error = action.payload
        }
    }
})

export const userSliceActions = userSlice.actions

