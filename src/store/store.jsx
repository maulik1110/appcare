// store.js
import { configureStore } from "@reduxjs/toolkit";
import dogReducer from "./reducer/DogSlice";
import CatReducer from "./reducer/CatSlice";
import cartReducer from "./reducer/CartSlice";

export const store = configureStore({
  reducer: {
    dog: dogReducer,
    cat: CatReducer,
    cart: cartReducer,
  }
});
