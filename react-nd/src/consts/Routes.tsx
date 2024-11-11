import { Home } from '@/views/home/Home';
import { About } from '@/views/about/About';
import { Category } from '@/views/category/Category';
import { Login } from '@/views/login/Login';

export const ROUTES = {
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
    element: null, //TODO
  },
  servicePage: (serviceName) => `/search/${serviceName}`,
  getAllRoutes: function () {
    return Object.values(this).filter((route) => typeof route === 'object' && route.path);
  },
};
