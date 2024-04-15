// import { createSlice } from "@reduxjs/toolkit";

// const CartSlice = createSlice ({
//     name: "cartslice",
//     initialState:{
//         cart: []
//     },
//     reducers:{
//         addtocart: (state,action)=>{
//             state.cart.push(action.payload)
//         },
//         removefromcart: (state,action)=>{
//             state.cart = state.cart.filter((item)=>{
//                 return item.id!== action.payload
//             })
//         }
//     }
// });
// export const {addtocart,removefromcart} = CartSlice.actions;
// export default CartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         cart: [],
//         orders: []
//     },
//     reducers: {
//         addItem: (state, action) => {
//             const { id } = action.payload;
//             const existingItem = state.cart.find(item => item.id === id);
//             if (existingItem) {
//                 existingItem.quantity += 1;
//             } else {
//                 state.cart.push({ ...action.payload, quantity: 1 });
//             }
//         },
//         removeItem: (state, action) => {
//             const { id } = action.payload;
//             const existingItem = state.cart.find(item => item.id === id);
//             if (existingItem && existingItem.quantity > 1) {
//                 existingItem.quantity -= 1;
//             } else {
//                 state.cart = state.cart.filter(item => item.id !== id);
//             }
//         },
//         clearCart: (state) => {
//             state.cart = [];
//         },
//         addOrder: (state, action) => {
//             state.orders.push(action.payload);
//         },
//     },
// });

// export const { addItem, removeItem, clearCart } = cartSlice.actions;
// export default cartSlice.reducer;
    


import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addtocart: (state, action) => {
            state.push(action.payload); // Modify state directly
        },
        removefromcart: (state, action) => {
            return state.filter(item => item.id !== action.payload); // Return a new state array
        },
        // decreaseQuantity: (state, action) => {
        //     const existingItem = state.find(item => item.id === action.payload);
        //     if (existingItem && existingItem.quantity > 1) {
        //         existingItem.quantity -= 1; // Decrease quantity if it's greater than 1
        //     }
        // },
        // setQuantity: (state, action) => {
        //     const { id, quantity } = action.payload;
        //     const existingItem = state.find(item => item.id === id);
        //     if (existingItem) {
        //         existingItem.quantity = quantity; // Set quantity to the specified value
        //     }
        // }

        addItem: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const { id } = action.payload;
            const existingItem = state.find(item => item.id === id);
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity -= 1;
            } else {
                // Remove the item from the cart only if its quantity is 1 or less
                return state.filter(item => item.id !== id);
            }
        },
        
    }
});

export const { addtocart, removefromcart,addItem,removeItem } = CartSlice.actions;
export default CartSlice.reducer;
