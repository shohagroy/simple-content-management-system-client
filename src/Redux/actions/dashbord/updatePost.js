import axios from "axios";
import toast from "react-hot-toast";

import { UPDATEPOSTDATA } from "../../actionTypes/actionTypes";

const updatePost = (updateData) => {
  return async (dispatch, getStore) => {
    console.log(updateData);

    const res = await axios.put(
      `${process.env.REACT_APP_SERVER_URL}/post-update`,
      updateData
    );

    const data = res.data;
    console.log(data);

    if (data.modifiedCount) {
      const { postBlog } = getStore();

      const remainBlog = postBlog.blogs.filter(
        (blog) => blog._id !== updateData._id
      );

      toast.success("Your post modify successfully!");

      const newBlogs = [...remainBlog, updateData];
      dispatch({ type: UPDATEPOSTDATA, payload: newBlogs });
    }
  };
};

export default updatePost;
