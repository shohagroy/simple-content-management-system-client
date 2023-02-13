import { GETUSER } from "../actionTypes/actionTypes";

const initialState = {
  userAuth: {},
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case GETUSER:
      console.log(action.payload);
      return {
        ...state,
        userAuth: action.payload,
      };

    default:
      return state;
  }
};

export default userReducers;
