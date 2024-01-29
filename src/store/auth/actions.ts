import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncThunkConfig } from 'common/types/app/async-thunk-config.type';

import { SignInType } from '../../common/types/sign-in/sign-in';
import { ActionType } from './common';
import { SignUpType } from '../../common/types/sign-up/sign-up';

const login = createAsyncThunk<string, SignInType, AsyncThunkConfig>(
  ActionType.LOGIN,
  async (payload, { extra }) => {
    const { authApi } = extra;

    return authApi.login(payload);
  },
);

const register = createAsyncThunk<string, SignUpType, AsyncThunkConfig>(
  ActionType.REGISTER,
  async (payload, { extra }) => {
    const { authApi } = extra;

    return authApi.register(payload);
  },
);

export { login, register };
