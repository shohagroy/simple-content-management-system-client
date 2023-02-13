import { LASTTOFIRST } from "../actionTypes/actionTypes";

const lastToFirst = () => {
  return (dispatch, getStore) => {
    const { postBlog } = getStore();
    const { viewPost } = postBlog;

    if (viewPost === "No data found!") {
      return;
    }

    dispatch({ type: LASTTOFIRST });
  };
};

export default lastToFirst;
