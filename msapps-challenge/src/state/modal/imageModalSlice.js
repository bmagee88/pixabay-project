import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

const imageModalSlice = createSlice({
  name: "imageModal",
  initialState,
  reducers: {
    toggleImageModal: (state) => {
        state.isOpen = !state.isOpen
    },
  },
});

export const { toggleImageModal } = imageModalSlice.actions;

export default imageModalSlice.reducer;  