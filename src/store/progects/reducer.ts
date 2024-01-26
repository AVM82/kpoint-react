import { createSlice } from '@reduxjs/toolkit';
import { ProjectType } from 'common/types/types';

import { getAllProjects, getById } from './actions';

type State={
  project: ProjectType | null,
  projects: ProjectsType[],
};

const initialState: State = {
  project: null,
  projects: [],
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
      })
      .addCase(getAllProjects.rejected, (state ) => {
        state.projects = [];
      })
      .addCase(getAllProjects.fulfilled, (state, { payload }) => {
        state.projects = payload;
      });
  },
});

const projectReducer = projectSlice.reducer;

export { projectReducer };
