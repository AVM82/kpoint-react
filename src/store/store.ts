import { configureStore } from '@reduxjs/toolkit';
import { notification,projectApi,storage } from 'services/services';

import { handleError } from './middlewares/middlewares';
import { rootReducer } from './root-reducer';

const extraArgument = {
  storage,
  notification,
  projectApi,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      thunk: { extraArgument },
    }).concat([handleError]);
  },
});

export { extraArgument, store };
