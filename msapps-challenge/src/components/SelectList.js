import { Button, Typography } from "@mui/material";
import React from "react";

const SelectList = ({ list, selectedItem, setSelectedItem }) => {


  return (
    <div>
      {list.map((item) => {
        const fontWeight = selectedItem === item.name ? "800" : "500" ;
        return (
          <Button key={item.id} sx={{ "&:hover": { background: "#f7f7f7" } }} onClick={()=>setSelectedItem(item.name)}>
            <Typography key={item.id} id={item.id} sx={{ mt: 2, fontWeight: fontWeight }}>
              {item.name}
            </Typography>
          </Button>
        );
      })}
    </div>
  );
};

export default SelectList;
