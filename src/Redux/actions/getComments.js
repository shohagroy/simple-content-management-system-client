import axios from "axios";
import { GETCOMMENTS } from "../actionTypes/actionTypes";

const getComments = () => {
  return async (dispatch, getStore) => {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/allComments`
    );
    const comments = res.data;
    if (comments.length) {
      dispatch({ type: GETCOMMENTS, payload: comments });
    }
  };
};

export default getComments;
