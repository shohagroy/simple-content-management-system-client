import { combineReducers } from "redux";
import blogReducer from "./blogReducers";
import userReducers from "./userReducers";

const rootReducer = combineReducers({
  postBlog: blogReducer,
  loginUser: userReducers,
});

export default rootReducer;
