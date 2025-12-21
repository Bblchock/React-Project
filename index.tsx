import { StrictMode } from 'react';
import { HashRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client';

import { App } from './App.tsx';

const renderApp = (): void => {
  const root = document.getElementById('root');

  if (!root) {
    throw Error('Ошибка загрузки приложения');
  }

  createRoot(root).render(
    <HashRouter basename="/">
      <StrictMode>
        <App />
      </StrictMode>
    </HashRouter>,
  );
};

renderApp();
