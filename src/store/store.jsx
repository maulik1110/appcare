// store.js
import { configureStore } from "@reduxjs/toolkit";
import dogReducer from "./reducer/DogSlice";
import CatReducer from "./reducer/CatSlice";
import CartReducer from "./reducer/CartSlice";

export const store = configureStore({
  reducer: {
    dog: dogReducer,
    cat: CatReducer,
    cart: CartReducer,
  }
});
