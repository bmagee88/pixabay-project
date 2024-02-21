import { createSlice } from "@reduxjs/toolkit";

const initialState = { isOpen: false };

const categoryModalSlice = createSlice({
  name: "categoryModal",
  initialState,
  reducers: {
    toggleCategoryModalOpen (state) {
      state.isOpen = true;
    },
    toggleCategoryModalClose (state) {
      state.isOpen = false;
    },
  },
});

export const { toggleCategoryModalOpen, toggleCategoryModalClose } =
  categoryModalSlice.actions;

export default categoryModalSlice.reducer;
