import { createSlice } from '@reduxjs/toolkit';
import { INITAIL_STATE } from '../constants/login';

import { PURGE } from 'redux-persist';

const userSlice = createSlice({
  name: 'user',
  initialState: INITAIL_STATE,
  reducers: {
    login: (state, action) => {
      return { ...action.payload };
    },
    logout: (state, action) => {
      return { ...INITAIL_STATE };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {});
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
