import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";

import { Layout, SignUpPage } from "../../pages";
import { LoginPage } from "../../pages";
import {Path} from "../../shared";

export const router: ReturnType<typeof createBrowserRouter> =
  createBrowserRouter([
    {
      path: Path.MAIN,
      element: <Layout />,
      children: [
        {
          element: <PrivateRoutes />,
          children: [
            {
              index: true,
              element: <h1>{"MAIN Page"}</h1>,
            },
            {
              path: Path.POST,
              element: <h1>{"My post Page"}</h1>,
            },
            {
              path: Path.ADD_POST,
              element: <h1>{"ADD POST  Page"}</h1>,
            },
            {
              path: Path.EDIT_POST,
              element: <h1>{"EDIT POST Page"}</h1>,
            },
          ],
        },
      ],
    },
    {
      path: Path.LOGIN,
      element: <LoginPage />,
    },
    {
      path: Path.SIGNUP,
      element: <SignUpPage />,
    },
    {
      path: Path.NOT_FOUND,
      element: <h1>404 Page</h1>,
    },
  ]);

function PrivateRoutes() {
  // const isAuthenticated = useAppSelector(userSelectors.isLoggedInSelectors);
  const isAuthenticated = true;

  return isAuthenticated ? <Outlet /> : <Navigate to={Path.LOGIN} />;
}
// <Outlet /> - выводит дочерние компоненты внутри роута
