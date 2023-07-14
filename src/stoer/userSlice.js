import { createSlice } from '@reduxjs/toolkit';
import { INITAIL_STATE } from '../constants/login';

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
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
