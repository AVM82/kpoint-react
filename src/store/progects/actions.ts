import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from 'common/types/app/async-thunk-config.type';

import { ProjectType } from '../../common/types/projects/project.type';
import { ActionType } from './common';

const getById = createAsyncThunk<ProjectType, { id: number }, AsyncThunkConfig>(
  ActionType.GET_BY_ID,
  async (payload, { extra }) => {
    const { projectApi } = extra;

    return projectApi.getById(payload);
  },
);

export { getById };
