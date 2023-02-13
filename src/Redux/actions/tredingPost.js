import { TRENDING } from "../actionTypes/actionTypes";

const tradindPost = () => {
  return (dispatch, getStore) => {
    const { postBlog } = getStore();
    const { viewPost } = postBlog;

    // viewPost.sort((a, b) => b.view - a.view);

    // console.log(trading);

    dispatch({ type: TRENDING });
  };
};

export default tradindPost;
