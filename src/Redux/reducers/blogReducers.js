import {
  GETBLOGS,
  GETCOMMENTS,
  POSTBLOG,
  POSTCOMMENT,
  TODAYSPICK,
  TRENDING,
} from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
  comments: [],
  viewPost: [],
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
        viewPost: action.payload,
        blogs: action.payload,
      };

    case TODAYSPICK:
      return {
        ...state,
        viewPost: action.payload,
        todayPost: true,
        trendingPost: false,
      };

    case TRENDING:
      console.log(state.blogs.sort((a, b) => b.view - a.view));
      return {
        ...state,
        viewPost: state.blogs.sort((a, b) => b.view - a.view),
        todayPost: false,
        trendingPost: true,
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
