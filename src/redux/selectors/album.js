import { createSelector } from "@reduxjs/toolkit";

const selectSelf = (state) => state.albums;

export const selectSearchString = createSelector(
  selectSelf,
  (album) => album.searchString
);