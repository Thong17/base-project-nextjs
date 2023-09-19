import { RootState } from '@/configs/redux/setup'
import { createSelector } from '@reduxjs/toolkit'

const homeContentSelector = (state: RootState) => state.home.content


export const selectHomeContent = createSelector(
  homeContentSelector,
  (state) => state
)
