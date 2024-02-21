import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: [], remaining: 0 };

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.value = action.payload.data;
      state.remaining = action.payload.remaining;
    },
  },
});

export const { setImages } = imageSlice.actions;

export default imageSlice.reducer;
