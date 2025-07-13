import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import Auth from "../auth/Auth";
import NotFound from "./notFound/NotFound";
const Layout = lazy(() => import("./layout/Layout"));
const Statistics = lazy(() => import("./statistics/Statistics"));
const Home = lazy(() => import("./home/Home"));
const Login = lazy(() => import("./login/Login"));

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
              path: "statistics",
              element: <Statistics />,
            },
            {
              path: "*",
              element: <NotFound />,
            },
          ],
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return (
    <Suspense
      fallback={
        <div className="flex gap-2 justify-center text-center items-center">
          Yuklanmoqda... <span className="loader"></span>
        </div>
      }
    >
      {routes}
    </Suspense>
  );
};

export default React.memo(MainRouter);
