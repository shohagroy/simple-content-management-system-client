import { combineReducers } from "redux";
import blogReducer from "./blogReducers";

const rootReducer = combineReducers({
  postBlog: blogReducer,
});

export default rootReducer;
