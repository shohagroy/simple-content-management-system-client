import DashBordLayout from "../layouts/DashBordLayout";
import BlogFullView from "../pages/BlogFullView/BlogFullView";
import CreateBlog from "../pages/Dashbord/CreateBlog/CreateBlog";
import Dashbord from "../pages/Dashbord/Dashbord";
import EditPage from "../pages/Dashbord/EditPage/EditPage";
import Login from "../pages/Login/Login";
import ReadingHistory from "../pages/ReadingHistory/ReadingHistory";
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
        path: "/reading-history",
        element: <ReadingHistory />,
      },

      {
        path: "/blog/:id",
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_SERVER_URL}/blog/${params.id}`),
        element: <BlogFullView />,
      },
      {
        path: "/dashbord",
        element: (
          <PrivatePouter>
            <DashBordLayout />
          </PrivatePouter>
        ),
        children: [
          {
            path: "/dashbord",
            element: <Dashbord />,
          },
          {
            path: "/dashbord/create-new-blog",
            element: <CreateBlog />,
          },
          {
            path: "/dashbord/update-blog/:id",
            element: <EditPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
