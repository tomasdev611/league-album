import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state) => state.user;

export const selectMyInfo = createSelector(
  selectSelf,
  (user) => user.myInfo
);