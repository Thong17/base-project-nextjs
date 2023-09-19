import { createSlice } from '@reduxjs/toolkit'
import {
  getHomeContent,

} from './home.action'

interface IBankInitialState {
  content: any
}

const initialState: IBankInitialState = {
  content: { data: null, isLoading: false },
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomeContent.pending, (state) => {
      state.content.isLoading = true
    })
    builder.addCase(getHomeContent.rejected, (state) => {
      state.content.isLoading = false
    })
    builder.addCase(getHomeContent.fulfilled, (state, action) => {
      state.content.isLoading = false
      state.content.data = action.payload?.data
    })
  },
})

export const { actions: homeActions, reducer: homeReducer } = homeSlice
