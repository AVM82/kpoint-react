import { createSlice } from '@reduxjs/toolkit';
import { ProjectsEditType, ProjectsType } from 'common/types/types';

import { createNew, getById } from './actions';

type State={
  project: ProjectsType | null,
  projects: ProjectsType[],
  editProject: ProjectsEditType | null,
};

const initialState: State = {
  project: null,
  projects: [],
  editProject: null,
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
      }).addCase(createNew.rejected, (state) => {
        state.project = null;
      })
      .addCase(createNew.fulfilled, (state, { payload }) => {
        state.project = payload;
      });
  },
});

const projectReducer = projectSlice.reducer;

export { projectReducer };
