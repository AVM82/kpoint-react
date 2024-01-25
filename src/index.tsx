import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'store/store';

import { App } from './components/app/app';
import { Toast } from './components/common/common';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Header/>
      <App/>
      <Footer/>
      <Toast />
    </Provider>
  </StrictMode>,
);
