import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import user from "./user";

const reducer = combineReducers({
  // here we will be adding reducers
  user,
});
const store = configureStore({
  reducer,
  devTools: true,
});
export default store;
