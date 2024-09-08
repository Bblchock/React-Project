import { Suspense } from 'react';

import { Route, Routes, Loader } from 'shared';
import { HomePage } from 'pages/HomePage';

import { routeList } from './routeList';

export const Routing = () => (
  <Routes>
    <Route key="main" path="/" element={<HomePage />} />
    {routeList.map(({ title, path, module }) => (
      <Route
        key={title}
        path={path}
        element={<Suspense fallback={<Loader />}>{module}</Suspense>}
      />
    ))}
  </Routes>
);
