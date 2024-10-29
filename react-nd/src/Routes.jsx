import { RouterProvider, createBrowserRouter } from "react-router-dom";

import DefaultLayout from '@/layout/DefaultLayout';
import ErrorPage from '@/views/ErrorPage';
import Home from '@/views/home/Home';
import Category from '@/views/category/Category';
import About from '@/views/about/About';
import Login from '@/views/login/Login';
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "search",
        element: <Category />,
      },
      {
        path: "search/:category",
        element: <Category />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />
}

export default Routes;