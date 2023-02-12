import axios from "axios";
import { POSTCOMMENT } from "../actionTypes/actionTypes";

const postComment = (publicComment) => {
  return async (dispatch, getStore) => {
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER_URL}/publicComment`,
      publicComment
    );
    const data = res.data;

    if (data.insertedId) {
      const updateComment = { ...publicComment, _id: data.insertedId };
      dispatch({ type: POSTCOMMENT, payload: updateComment });
    }
  };
};

export default postComment;
