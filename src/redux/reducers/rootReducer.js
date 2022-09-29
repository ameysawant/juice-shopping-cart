import { combineReducers } from "redux";
import { headerReducer } from "./header/HeaderReducer";

const rootReducer = combineReducers({
  headerReducer,
});

export default rootReducer;
