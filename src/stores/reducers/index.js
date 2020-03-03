import { combineReducers } from "redux";
import authReducer from "./auth";
import loadingReducer from "./loading";

const rootReducers = combineReducers({
  auth: authReducer,
  loading: loadingReducer
});

export default rootReducers;
