import axios from "axios";
import { DASHBORDCALLDATA } from "../../actionTypes/actionTypes";

const dashbordCallData = () => {
  return async (dispatch, getStore) => {
    const { loginUser } = getStore();
    const { email } = loginUser.userAuth;

    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/dashbord-data?email=${email}`
    );
    const data = res.data;
    dispatch({ type: DASHBORDCALLDATA, payload: data });
  };
};

export default dashbordCallData;
