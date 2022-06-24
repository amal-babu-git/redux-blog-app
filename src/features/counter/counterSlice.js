import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'couter',
    initialState,
    reducers: {
        // Actions
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload;
        }
    }
});

export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;
// Register reducer in store.js
export default counterSlice.reducer;


