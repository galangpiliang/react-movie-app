import { GET_MOVIE, GET_GENRE } from "../actions/types";

const movieReducer = (state = false, action) => {
  switch (action.type) {
    case GET_MOVIE:
      return { ...state, ...action.payload };
    case GET_GENRE:
      return { ...state, genres: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
