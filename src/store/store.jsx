// store.js
import { configureStore } from "@reduxjs/toolkit";
import dogReducer from "./reducer/DogSlice";
import CatReducer from "./reducer/CatSlice";

export const store = configureStore({
  reducer: {
    dog: dogReducer,
    cat: CatReducer,
  }
});
