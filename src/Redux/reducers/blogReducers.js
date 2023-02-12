import {
  GETBLOGS,
  GETCOMMENTS,
  POSTBLOG,
  POSTCOMMENT,
} from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  comments: [],
};

const blogReducer = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case POSTBLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    case GETBLOGS:
      return {
        ...state,
        blogs: action.payload,
      };
    case GETCOMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case POSTCOMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    default:
      return state;
  }
};

export default blogReducer;
