import { Suspense } from 'react';

import { Route, Routes, Loader, Navigate } from 'shared';

import { routeList } from './routeList';

export const Routing = () => (
  <Routes>
    <Route key="main" path="/" element={<Navigate to="/champions" replace />} />
    {routeList.map(({ title, path, module }) => (
      <Route
        key={title}
        path={path}
        element={<Suspense fallback={<Loader />}>{module}</Suspense>}
      />
    ))}
  </Routes>
);
