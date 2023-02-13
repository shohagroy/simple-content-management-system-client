import { GETUSER } from "../../actionTypes/actionTypes";

const getUser = (userInfo) => {
  return (dispatch, getStore) => {
    if (userInfo) {
      dispatch({ type: GETUSER, payload: userInfo });
    }
  };
};

export default getUser;
