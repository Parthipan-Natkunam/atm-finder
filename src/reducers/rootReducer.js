import { combineReducers } from "redux";

import appReducer from "./appReducer";
import mapReducer from "./mapReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  map: mapReducer
});

export default rootReducer;