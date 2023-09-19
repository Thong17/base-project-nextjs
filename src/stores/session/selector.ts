import { RootState } from "@/configs/redux/setup";
import { createSelector } from "@reduxjs/toolkit";

export const selectSession = createSelector(
    (state: RootState) => state.session,
    (state) => state
)