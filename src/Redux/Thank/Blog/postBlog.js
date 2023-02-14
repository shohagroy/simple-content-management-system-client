import axios from "axios";
import toast from "react-hot-toast";
import { CREATEPOST } from "../../actionTypes/actionTypes";

const blogPublish = (content, navigate) => {
  return async (dispatch, getStore) => {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/create-blog`,
      content
    );

    const data = res.data;

    if (data.insertedId) {
      const { postBlog, dashbord } = getStore();

      console.log(postBlog.blogs);

      const newPost = { ...content, _id: data.insertedId };
      const updateData = [...postBlog.blogs, newPost];
      const userDashbordData = [...dashbord.dashbordData, newPost];
      toast.success("New Blog Added Successfully!");

      dispatch({ type: CREATEPOST, payload: { updateData, userDashbordData } });
      navigate("/dashbord");
    }
  };
};

export default blogPublish;
