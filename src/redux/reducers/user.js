import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import UserService from "../../services/UserService";

export const initialState = {
  loading: false,
  myInfo: null,
  allUsers: null
}

export const login = createAsyncThunk('login', async (email) => {
  const response = await UserService.login();

  return {
    allUsers: response.data,
    myInfo: response.data.find(a => a.email === email)
  };
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    }
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, { payload }) => {
      state.loading = true;
      state.allUsers = payload.allUsers;
      state.myInfo = payload.myInfo;
    },
    [login.rejected]: (state) => {
      state.loading = false;
      state.allUsers = null;
      state.myInfo = null;
    },
  }
});

export default userSlice.reducer;