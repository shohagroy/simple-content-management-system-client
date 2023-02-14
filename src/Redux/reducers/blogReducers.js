import {
  CREATEPOST,
  FIRSTTOLAST,
  GETBLOGS,
  GETCOMMENTS,
  LASTTOFIRST,
  POSTBLOG,
  POSTCOMMENT,
  TODAYSPICK,
  TRENDING,
  UPDATEPOSTDATA,
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
    case CREATEPOST:
      return {
        ...state,
        blogs: action.payload.updateData,
        viewPost: action.payload.updateData,
        dashbordData: action.payload.userDashbordData,
      };
    case GETBLOGS:
      return {
        ...state,
        viewPost: action.payload,
        blogs: action.payload,
      };
    case FIRSTTOLAST:
      return {
        ...state,
        viewPost: state.blogs.sort(
          (a, b) => new Date(b.postDate) - new Date(a.postDate)
        ),
        todayPost: false,
        trendingPost: false,
      };

    case LASTTOFIRST:
      return {
        ...state,
        viewPost: state.blogs.sort(
          (a, b) => new Date(a.postDate) - new Date(b.postDate)
        ),
        todayPost: false,
        trendingPost: false,
      };

    case TODAYSPICK:
      return {
        ...state,
        viewPost: action.payload,
        todayPost: true,
        trendingPost: false,
      };

    case TRENDING:
      return {
        ...state,
        viewPost: [...state.blogs.sort((a, b) => b.view - a.view)],
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

    case UPDATEPOSTDATA:
      return {
        ...state,
        blogs: action.payload,
        viewPost: action.payload,
      };
    default:
      return state;
  }
};

export default blogReducer;
