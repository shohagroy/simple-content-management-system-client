import { READINGHISTORY } from "../actionTypes/actionTypes";

const removeReadingHistory = (id) => {
  return (dispatch, getStore) => {
    const { postBlog } = getStore();

    if (postBlog.readingBlog) {
      const remainBlog = postBlog.readingBlog.filter((blog) => blog._id !== id);

      dispatch({ type: READINGHISTORY, payload: remainBlog });
    }
  };
};

export default removeReadingHistory;
