import { DASHBORDCALLDATA } from "../../actionTypes/actionTypes";

const dashbordCallData = (user) => {
  return async (dispatch, getStore) => {
    const { postBlog } = getStore();

    if (postBlog.blogs.length) {
      const authorBlog = postBlog?.blogs.filter(
        (blog) => blog.authorEmail === user.email
      );

      console.log(authorBlog);
      dispatch({ type: DASHBORDCALLDATA, payload: authorBlog });
    }
  };
};

export default dashbordCallData;
