import { combineReducers } from "redux";
import blogReducer from "./blogReducers";
import dashbordReducers from "./dashbordReducers";
import userReducers from "./userReducers";

const rootReducer = combineReducers({
  postBlog: blogReducer,
  loginUser: userReducers,
  dashbord: dashbordReducers,
});

export default rootReducer;
