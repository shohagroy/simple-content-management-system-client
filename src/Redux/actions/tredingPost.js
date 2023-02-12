import { TRENDING } from "../actionTypes/actionTypes";

const tradindPost = () => {
  return (dispatch, getStore) => {
    dispatch({ type: TRENDING });
  };
};

export default tradindPost;
