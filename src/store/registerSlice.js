import { createSlice } from '@reduxjs/toolkit';
import { INITAIL_STATE } from '../constants/login';

const registerSlice = createSlice({
  name: 'register',
  initialState: INITAIL_STATE,
  reducers: {
    register1: (state, action) => {
      const { email, birthday } = action.payload;
      return {
        ...state,
        email,
        birthday,
      };
    },
    register2: (state, action) => {
      const { id, nickname } = action.payload;
      return {
        ...state,
        id,
        nickname,
      };
    },
  },
});

export const { register1, register2 } = registerSlice.actions;
export default registerSlice.reducer;
