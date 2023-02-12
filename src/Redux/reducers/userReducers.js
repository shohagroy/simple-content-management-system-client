import { LOGIN } from "../actionTypes/actionTypes";

const initialState = {
  userAuth: {},
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      //   console.log(action);
      return {
        ...state,
        userAuth: { user: action.payload },
      };

    default:
      return state;
  }
};

export default userReducers;
