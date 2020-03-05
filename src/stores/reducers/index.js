import { combineReducers } from "redux";
import authReducer from "./auth";
import loadingReducer from "./loading";
import movieReducer from "./movie";

const rootReducers = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  movie: movieReducer
});

export default rootReducers;
