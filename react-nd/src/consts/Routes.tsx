import { Home } from '@/views/home/Home';
import { About } from '@/views/about/About';
import { Category } from '@/views/category/Category';
import { Login } from '@/views/login/Login';
import { RouteType } from '@/type/routeType';

export const ROUTES: Record<string, RouteType> = {
  HOME: {
    name: 'Home',
    path: '/',
    element: <Home />,
  },
  ABOUT: {
    name: 'About',
    path: '/about',
    element: <About />,
  },
  SERVICES: {
    name: 'Services',
    path: '/search',
    element: <Category />,
  },
  SERVICES_CATEGORY: {
    name: 'Services',
    path: '/search/:category',
    element: <Category />,
  },
  LOGIN: {
    name: 'Login',
    path: '/login',
    element: <Login />,
  },
  CONTACT: {
    name: 'Contact',
    path: '/contact',
    element: <Home />, //TODO
  },
};

const getAllRoutesInternal = (routes: Record<string, RouteType>) => {
  return Object.values(routes).filter((route) => typeof route === 'object' && route.path);
};

export const servicePage = (serviceName: string): string => `/search/${serviceName}`;
export const getAllRoutes = () => getAllRoutesInternal(ROUTES);
