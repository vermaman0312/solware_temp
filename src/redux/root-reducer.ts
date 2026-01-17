import { combineReducers } from "@reduxjs/toolkit";
import unauthenticatedLoginReducer from "./slices/unauthorized";


const rootReducer = combineReducers({
  unauthenticatedLogin: unauthenticatedLoginReducer,
});

export default rootReducer;
