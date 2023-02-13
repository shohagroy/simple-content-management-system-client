import axios from "axios";
import toast from "react-hot-toast";
import { DELETEDPOST } from "../../../Redux/actionTypes/actionTypes";

const deletedPost = (id) => {
  return async (dispatch, getStore) => {
    console.log("deleted id: ", id);

    const res = await axios.delete(
      `${process.env.REACT_APP_SERVER_URL}/post-deleted?id=${id}`
    );

    const data = res.data;
    console.log(data);

    if (data.deletedCount) {
      toast.error("Blog Deleted Successfully!");
      const { dashbord } = getStore();

      const remainPost = dashbord?.dashbordData.filter(
        (blog) => blog._id !== id
      );
      dispatch({ type: DELETEDPOST, payload: remainPost });
    }
  };
};

export default deletedPost;
