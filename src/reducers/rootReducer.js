import { combineReducers } from "redux";
import ResearchingReducer from "./ResearchingReducer";
import ApprovedReducer from "./ApprovedReducer";
import PendingReducer from "./PendingReducer";
import DeclinedReducer from "./DeclinedReducer";

const rootReducer = combineReducers({
  ResearchingReducer,
  ApprovedReducer,
  PendingReducer,
  DeclinedReducer,
});

export default rootReducer;
