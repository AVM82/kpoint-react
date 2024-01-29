import { createSlice } from '@reduxjs/toolkit';
import { ProjectType } from 'common/types/types';

import { getById } from './actions';

type State={
  project: ProjectType | null,

};

const initialState: State = {
  project: null,
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getById.rejected, (state ) => {
        state.project = null;
      })
      .addCase(getById.fulfilled, (state, { payload }) => {
        state.project = payload;
      });
  },
});

const projectReducer = projectSlice.reducer;

export { projectReducer };
