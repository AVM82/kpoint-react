import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from 'common/types/app/async-thunk-config.type';

import { ProjectsType } from '../../common/types/projects/projects.type';
import { ProjectsPageType } from '../../common/types/projects/projects-page.type';
import { ActionType } from './common';

const getById = createAsyncThunk<ProjectsType, { id: number }, AsyncThunkConfig>(
  ActionType.GET_BY_ID,
  async (payload, { extra }) => {
    const { projectApi } = extra;

    return projectApi.getById(payload);
  },
);

const getAllProjects = createAsyncThunk<ProjectsPageType, void, AsyncThunkConfig>(
  ActionType.GET_ALL_PROJECTS,
  async (_, { extra }) => {
    const { projectApi } = extra;

    return projectApi.getAllProjects();
  },
);

export { getAllProjects,getById };
