import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from 'common/types/app/async-thunk-config.type';

import { ProjectsType } from '../../common/types/projects/projects.type';
import { ActionType } from './common';

const login = createAsyncThunk<ProjectsType, { id: number }, AsyncThunkConfig>(
  ActionType.LOGIN,
  async (payload, { extra }) => {
    const { authApi } = extra;

    return authApi.login(payload);
  },
);

export { login };
