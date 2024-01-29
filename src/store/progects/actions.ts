import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from 'common/types/app/async-thunk-config.type';

import { ProjectType } from '../../common/types/projects/project.type';
import { ProjectsPageType } from '../../common/types/projects/projects-page.type';
import { ActionType } from './common';

const getById = createAsyncThunk<ProjectType, { id: number }, AsyncThunkConfig>(
  ActionType.GET_BY_ID,
  async (payload, { extra }) => {
    const { projectApi } = extra;

    return projectApi.getById(payload);
  },
);

const getAllProjects = createAsyncThunk<ProjectsPageType,
  { size: number, number: number }, AsyncThunkConfig>(
    ActionType.GET_ALL_PROJECTS,
    async (payload, { extra }) => {
      const { projectApi } = extra;

      return projectApi.getAllProjects(payload);
    },
  );

const createNew = createAsyncThunk<ProjectsType, { newProject: ProjectsEditType }, AsyncThunkConfig>(
  ActionType.POST_NEW,
  async (payload, { extra }) => {
    const { projectApi } = extra;

    return projectApi.createNew(payload.newProject);
  },
);

export { createNew,getAllProjects,getById };
