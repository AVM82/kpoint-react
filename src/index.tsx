import { App } from 'components/app/app';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'store/store';

import { Toast } from './components/common/common';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App/>
      <Toast />
    </Provider>
  </StrictMode>,
);
