import { RootState } from "@/configs/redux/setup";
import { createSelector } from "@reduxjs/toolkit";

export const selectConfig = createSelector(
    (state: RootState) => state.config,
    (state) => state
)