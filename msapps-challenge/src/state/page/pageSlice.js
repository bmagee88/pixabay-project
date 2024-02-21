import { createSlice } from '@reduxjs/toolkit'

const initialState = {value: 1}

const pageSlice = createSlice({
    name: "page",
    initialState,
    reducers: {
        increment(state) {
            state.value += 1;
        },
        decrement(state) {
            state.value = state.value <= 1 ? 1 : state.value - 1;
        },
        reset(state) {
            state.value = 1;
        }
    }
})

export const {increment, decrement, reset} = pageSlice.actions;

export default pageSlice.reducer;