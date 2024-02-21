import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./image/imageSlice";
import pageReducer from "./page/pageSlice";
import categoryReducer from './category/categorySlice'
import categoryModalReducer from './modal/categoryModalSlice'
import { combineReducers } from "redux";

const reducers = combineReducers({
  images: imageReducer,
  page: pageReducer,
  category: categoryReducer,
  imageModal: imageReducer,
  categoryModal: categoryModalReducer
});
export const store = configureStore({ reducer: reducers });
