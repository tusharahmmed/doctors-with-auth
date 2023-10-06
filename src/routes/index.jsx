import {createBrowserRouter} from "react-router-dom";

// import PrivateRoute from "../components/shared/privateRoute/PrivateRoute";
import PublicRoute from "../components/shared/publicRoute/PublicRoute";
import Root from "../layouts/Root";
import {
  AboutPage,
  HomePage,
  LoginPage,
  NotFoundPage,
  RegisterPage,
} from "../pages";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {index: true, element: <HomePage />},
      // {
      //   path: "/books/:id",
      //   element: (
      //     <PrivateRoute>
      //       <BookDetailsPage />
      //     </PrivateRoute>
      //   ),
      // },

      // {
      //   path: "/edit-book/:id",
      //   element: (
      //     <PrivateRoute>
      //       <EditBook />
      //     </PrivateRoute>
      //   ),
      // },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/login",
        element: (
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        ),
      },
      {
        path: "/sign-up",
        element: (
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
