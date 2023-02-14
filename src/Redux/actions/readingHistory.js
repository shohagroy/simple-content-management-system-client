import { READINGHISTORY } from "../actionTypes/actionTypes";

const readingHistory = (blog) => {
  return (dispatch, getStore) => {
    const { postBlog } = getStore();

    if (postBlog.blogs.length) {
      const remainReadingBlog = postBlog.readingBlog.filter(
        (reading) => reading._id !== blog._id
      );
      const newReadingBlog = [...remainReadingBlog, blog];
      dispatch({ type: READINGHISTORY, payload: newReadingBlog });
    }
  };
};

export default readingHistory;
