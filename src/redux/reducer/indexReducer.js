import orderReducer from "./orderFunctionReducer";
import productReducer from "./productFunctionReducer";
import authReducer from "./authReducer";
import orderStateReducer from "./orderStateReducer";
import productStateReducer from "./productStateReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  productReducer: productReducer,
  orderReducer: orderReducer,
  orderStateReducer: orderStateReducer,
  productStateReducer: productStateReducer,
  authReducer: authReducer,
});

export default rootReducer;
