import { createSlice } from '@reduxjs/toolkit';

import { login } from './actions';

type State={
  token: string | null,

};

const initialState: State = {
  token: null,
};

const authSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.rejected, (state ) => {
        console.log('token is: ' + state.token);
        state.token = null;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        console.log('token is: ' + state.token);
        state.token = payload;
      });
  },
});

const authReducer = authSlice.reducer;

export { authReducer };
