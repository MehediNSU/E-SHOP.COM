import orderReducer from "./orderFunctionReducer";
import productReducer from "./productFunctionReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productReducer,
  orderReducer,
});

export default rootReducer;
