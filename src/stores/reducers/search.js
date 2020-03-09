import { SEARCH } from "../actions/types";

const searchReducer = (state = false, action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
