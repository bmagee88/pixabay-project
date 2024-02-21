import { Button, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../state/category/categorySlice";
import { toggleCategoryModalClose } from "../state/modal/categoryModalSlice";

const SelectList = ({ list }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {list.map((item) => {
        return (
          <Button
            key={item.id}
            sx={{ "&:hover": { background: "#f7f7f7" } }}
            onClick={() => {
              dispatch(setCategory(item.name));
              dispatch(toggleCategoryModalClose());
            }}
          >
            <Typography
              key={item.id}
              id={item.id}
              sx={{ mt: 2, fontWeight: 500 }}
            >
              {item.name}
            </Typography>
          </Button>
        );
      })}
    </div>
  );
};

export default SelectList;
