import { createSlice } from "@reduxjs/toolkit";

const DogSlice = createSlice({
    name: 'dog',
    initialState: {
        dog: []
    },
    reducers: {
        addDog: (state, action) => {
            state.dog.push(action.payload);
        },
        deleteDog: (state, action) => {
            state.dog.splice(action.payload, 1);
        }
    }
})

export const { addDog, deleteDog } = DogSlice.actions;
export default DogSlice.reducer;