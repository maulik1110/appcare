import { createSlice } from "@reduxjs/toolkit";


const catSlice = createSlice({
    name: 'cat',
    initialState: {
        cats: []
    },
    reducers: {
        addCat: (state, action) => {
            state.cats.push(action.payload);
        },
        deleteCat: (state, action) => {
            state.cats = state.cats.filter(cat => cat.id !== action.payload);
        }
    }
});

export const { addCat, deleteCat } = catSlice.actions;
export default catSlice.reducer;
