import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import SelectList from "./SelectList";
import { useDispatch, useSelector } from "react-redux";
import { reset } from "../state/page/pageSlice";
import {
  toggleCategoryModalClose,
} from "../state/modal/categoryModalSlice";

const mock_category_list = [
  { id: 0, name: "nature" },
  { id: 1, name: "sports" },
  { id: 2, name: "animals" },
  { id: 3, name: "architecture" },
  { id: 4, name: "stocks" },
  { id: 5, name: "coffee" },
  { id: 6, name: "programming" },
  { id: 7, name: "pythons" },
  { id: 8, name: "rest" },
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CategoryModal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.categoryModal.isOpen);
  return (
    <Modal
      open={isOpen}
      onClose={() => {
        dispatch(toggleCategoryModalClose());
        dispatch(reset());
      }}
      aria-labelledby="Categories"
      aria-describedby="Categories"
    >
      <Box sx={style}>
        <Typography id="title" variant="h6" component="h2">
          Categories
        </Typography>
        <SelectList list={mock_category_list} />
      </Box>
    </Modal>
  );
};

export default CategoryModal;
