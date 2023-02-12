import axios from "axios";
import { GETBLOGS } from "../actionTypes/actionTypes";

const getBlogs = () => {
  return async (dispatch, getStore) => {
    const res = await axios(`${process.env.REACT_APP_SERVER_URL}/all-post`);
    const data = await res.data;

    if (data.length) {
      dispatch({ type: GETBLOGS, payload: data });
    }
  };
};

export default getBlogs;
