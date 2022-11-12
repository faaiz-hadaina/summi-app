import contactReducer from "./contactreducer";
import loadingReducer from "./loadingreducer.js";

import { combineReducers } from "redux";

const allReducers = combineReducers({
  contactReducer,
  loadingReducer
});

export default allReducers;
