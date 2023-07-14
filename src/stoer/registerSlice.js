import { createSlice } from '@reduxjs/toolkit';
import { INITAIL_STATE } from '../constants/login';

const registerSlice = createSlice({
  name: 'register',
  initialState: INITAIL_STATE,
  reducers: {
    register1: (state, action) => {
      const { email, birthday } = action.payload;
      state.email = email;
      state.birthday = birthday;
    },
    register2: (state, action) => {
      const { id, nickname } = action.payload;
      state.id = id;
      state.nickname = nickname;
    },
  },
});

export const { register1, register2 } = registerSlice.actions;
export default registerSlice.reducer;
