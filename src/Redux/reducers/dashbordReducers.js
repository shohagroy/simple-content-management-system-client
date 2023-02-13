import { DASHBORDCALLDATA, DELETEDPOST } from "../actionTypes/actionTypes";

const initialState = {
  dashbordData: [],
};

const dashbordReducers = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case DASHBORDCALLDATA:
      return {
        ...state,
        dashbordData: action.payload,
      };
    case DELETEDPOST:
      return {
        ...state,
        dashbordData: action.payload,
      };

    default:
      return state;
  }
};

export default dashbordReducers;
