import { configureStore } from "@reduxjs/toolkit";

import userReducer from './reducers/user';
import albumsReducer from './reducers/albums';
import { initialState as userInitialState } from './reducers/user';

export const STORAGE_KEY_USER = 'league_user';

const userPersistedState = localStorage.getItem(STORAGE_KEY_USER)
  ? JSON.parse(localStorage.getItem(STORAGE_KEY_USER))
  : undefined;

const store = configureStore({
  reducer: {
    user: userReducer,
    albums: albumsReducer
  },
  preloadedState: {
    user: {
      ...userInitialState,
      ...userPersistedState,
    },
  }
});

store.subscribe(() => {
  const { user } = store.getState();

  localStorage.setItem(STORAGE_KEY_USER, JSON.stringify(user));
})

export default store;