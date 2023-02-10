import { POSTBLOG } from "../actionTypes/actionTypes";

const initialState = {
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case POSTBLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };
    default:
      return state;
  }
};

export default blogReducer;
