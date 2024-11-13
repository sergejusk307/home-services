import { createBrowserRouter } from 'react-router-dom';

import { DefaultLayout } from '@/layout/DefaultLayout';
import { ErrorPage } from '@/views/error';

import { ROUTES, getAllRoutes } from '@/consts/Routes';
import { RouteType } from '@/type/routeType';

const allRoutes = getAllRoutes() as RouteType[];
const routeChildren = allRoutes.map((route) => ({ path: route.path, element: route.element }));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: routeChildren,
  },
]);
