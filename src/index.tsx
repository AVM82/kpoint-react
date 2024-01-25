import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from 'store/store';

import { App } from './components/app/app';
import { ProjectsPage } from './components/app/projects-page';
import { Toast } from './components/common/common';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';

const root = createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProjectsPage/>}/>
          <Route path="projects/1" element={<App/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      <Toast />
    </Provider>
  </StrictMode>,
);
