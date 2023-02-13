import { FIRSTTOLAST } from "../actionTypes/actionTypes";

const firstToLast = () => {
  return (dispatch, getStore) => {
    const { postBlog } = getStore();
    const { viewPost } = postBlog;

    if (viewPost === "No data found!") {
      return;
    }

    // viewPost?.sort((a, b) => {
    //   const dateA = new Date(a.postDate);
    //   const dateB = new Date(b.postDate);
    //   return dateB - dateA;
    // });

    dispatch({ type: FIRSTTOLAST });
  };
};

export default firstToLast;
