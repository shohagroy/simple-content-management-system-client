import DashBordLayout from "../layouts/DashBordLayout";
import CreateBlog from "../pages/CreateBlog/CreateBlog";
import Dashbord from "../pages/Dashbord/Dashbord";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import PrivatePouter from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../layouts/MainLayout");
const { default: Home } = require("../pages/Home/Home");

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashbord",
        element: <DashBordLayout />,
        children: [
          {
            path: "/dashbord",
            element: <Dashbord />,
          },
          {
            path: "/dashbord/create-new-blog",
            element: <CreateBlog />,
          },
        ],
      },
    ],
  },
]);

export default router;
