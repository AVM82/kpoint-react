import { createSlice } from '@reduxjs/toolkit';
import { ProjectsPageType } from 'common/types/types';

import { ProjectType } from '../../common/types/projects/project.type';
import { getAllProjects, getById } from './actions';

type State={
  project: ProjectType | null,
  projects: ProjectsPageType | null,
};

const initialState: State = {
  project: null,
  projects: null,
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
        state.projects = null;
      })
      .addCase(getAllProjects.fulfilled, (state, { payload }) => {
        state.projects = payload;
      });
  },
});

const projectReducer = projectSlice.reducer;

export { projectReducer };
