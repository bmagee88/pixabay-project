import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleCategoryModalOpen } from "../state/modal/categoryModalSlice";

const CategoryButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      variant="contained"
      onClick={() => {
        dispatch(toggleCategoryModalOpen());
      }}
    >
      Category
    </Button>
  );
};

export default CategoryButton;
