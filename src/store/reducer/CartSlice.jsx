import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: { cart: [] }, // State object with a 'cart' property
    reducers: {
        addtocart: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        
        removefromcart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload); // Update cart array directly
        },
       
        addItem: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
            }
        },
        
        removeItem: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.cart.find(item => item.id === id);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                state.cart = state.cart.filter(item => item.id !== id);
            }
        },
    }
});

export const { addtocart, removefromcart, addItem, removeItem } = CartSlice.actions;
export default CartSlice.reducer;
