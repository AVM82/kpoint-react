import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from 'common/types/app/async-thunk-config.type';

import { ProjectsType } from '../../common/types/projects/projects.type';
import { ProjectsEditType } from '../../common/types/projects/projects-edit.type';
import { ActionType } from './common';

const getById = createAsyncThunk<ProjectsType, { id: number }, AsyncThunkConfig>(
  ActionType.GET_BY_ID,
  async (payload, { extra }) => {
    const { projectApi } = extra;

    return projectApi.getById(payload);
  },
);

const createNew = createAsyncThunk<ProjectsType, { newProject: ProjectsEditType }, AsyncThunkConfig>(
  ActionType.POST_NEW,
  async (payload, { extra }) => {
    const { projectApi } = extra;

    return projectApi.createNew(payload.newProject);
  },
);

export { createNew, getById };
