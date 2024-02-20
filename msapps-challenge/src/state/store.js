import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./image/imageSlice";
import pageReducer from "./page/pageSlice";
import { combineReducers } from "redux";

const reducers = combineReducers({
  images: imageReducer,
  page: pageReducer,
});
export const store = configureStore({ reducer: reducers });
