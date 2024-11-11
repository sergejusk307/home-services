import { createBrowserRouter } from 'react-router-dom';

import { DefaultLayout } from '@/layout/DefaultLayout';
import { ErrorPage } from '@/views/error';

import { ROUTES } from '@/consts/Routes';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: ROUTES.getAllRoutes().map((route) => ({
      path: route.path,
      element: route.element,
    })),
  },
]);
