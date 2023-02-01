import DashBord from "../layouts/DashBord";
import CreateBlog from "../pages/CreateBlog/CreateBlog";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../layouts/MainLayout");
const { default: Home } = require("../pages/Home/Home");

const router = createBrowserRouter([
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
        element: <DashBord />,
        children: [
          {
            path: "/dashbord/add-new-blog",
            element: <CreateBlog />,
          },
        ],
      },
    ],
  },
]);

export default router;
