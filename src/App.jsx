import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard, { dashBoardLoader } from "./pages/Dashboard";
import Main, { mainLoader } from "./layouts/Main";
import ErrorPage from "./pages/404";
import { logout } from "./actions/logout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashBoardLoader,
        errorElement: <ErrorPage />,
      },
      {
        path: "logout",
        action: logout
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
