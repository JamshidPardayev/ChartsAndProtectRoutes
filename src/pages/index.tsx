import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Auth from "../auth/Auth";

const Layout = lazy(() => import("./layout/Layout"));
const About = lazy(() => import("./about/About"));
const Home = lazy(() => import("./home/Home"));
const Login = lazy(() => import("./login/Login"));
const Register = lazy(() => import("./register/Register"));

const MainRouter = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Auth />,
      children: [
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "about",
              element: <About />,
            },
          ],
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);

  return <Suspense fallback={<div>Yuklanmoqda...</div>}>{routes}</Suspense>;
};

export default React.memo(MainRouter);
