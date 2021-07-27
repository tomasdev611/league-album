import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AlbumService from "../../services/AlbumService";

const initialState = {
  loading: false,
  albums: null,
  photos: null,
  searchString: ''
};

export const fetchAllAlbums = createAsyncThunk('albums', async () => {
  const response = await AlbumService.getAllAlbums();

  return response.data;
});

export const fetchAlbumsByUserId = createAsyncThunk('user/albums', async (userId) => {
  const response = await AlbumService.getAlbumsByUserId(userId);

  return response.data;
});

export const fetchPhotosByAlbumId = createAsyncThunk('albums/photo', async (albumId) => {
  const response = await AlbumService.getPhotosByAlbumId(albumId);

  return response.data;
});

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    saveSearchString: (state, action) => {
      state.searchString = action.payload;
    }
  },
  extraReducers: {
    [fetchAllAlbums.pending]: (state) => {
      state.loading = true;
    },
    [fetchAllAlbums.rejected]: (state) => {
      state.loading = false;
    },
    [fetchAllAlbums.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.albums = payload;
    },
    [fetchAlbumsByUserId.pending]: (state) => {
      state.loading = true;
    },
    [fetchAlbumsByUserId.rejected]: (state) => {
      state.loading = false;
    },
    [fetchAlbumsByUserId.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.albums = payload;
    },
    [fetchPhotosByAlbumId.pending]: (state) => {
      state.loading = true;
    },
    [fetchPhotosByAlbumId.rejected]: (state) => {
      state.loading = false;
    },
    [fetchPhotosByAlbumId.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.photos = payload;
    },
  }
});

export const { saveSearchString } = albumSlice.actions

export default albumSlice.reducer;