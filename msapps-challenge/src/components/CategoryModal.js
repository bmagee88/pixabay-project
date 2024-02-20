import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import SelectList from "./SelectList";

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

const CategoryModal = ({ isOpen, handleClose, categoryList, setCategory }) => {
    const [selectedItem, setSelectedItem] = useState("")
    return (
    <Modal
      open={isOpen}
      onClose={() =>{ handleClose(); setCategory(selectedItem)}}
      aria-labelledby="Categories"
      aria-describedby="Categories"
    >
      <Box sx={style}>
        <Typography id="title" variant="h6" component="h2">
          Categories
        </Typography>
        <SelectList list={categoryList} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
      </Box>
    </Modal>
  );
};

export default CategoryModal;
