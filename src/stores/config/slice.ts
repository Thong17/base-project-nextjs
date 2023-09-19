import { createSlice } from "@reduxjs/toolkit";

interface ISession {
    isOpenedSidebar?: boolean
    isAttachedSidebar?: boolean
}

const initialState: ISession = {
    isOpenedSidebar: false,
    isAttachedSidebar: true
}

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        toggleSidebar: (state) => {
            state.isOpenedSidebar = !state.isOpenedSidebar
        },
        toggleAttach: (state) => {
            state.isAttachedSidebar = !state.isAttachedSidebar
        },
    },
})

export const { actions: configAction, reducer: configReducer } = configSlice