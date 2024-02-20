import { Box, Modal, Typography } from "@mui/material";
import React from "react";

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

const ImageModal = ({ img, isOpen, handleClose }) => {
  return (
    <Modal
      open={isOpen}
      onClose={() => handleClose()}
      aria-labelledby={`Image of ${img.tags}`}
      aria-describedby={`Image of ${img.tags}`}
    >
      <Box sx={style}>
        <Typography id="details" variant="h6" component="h2">
          Details
        </Typography>
        <Typography id="views" component="p">
          Views: {img.views}
        </Typography>
          <Typography id="likes" component="p">
            Likes: {img.likes}
          </Typography>
        <Typography id="downloads" component="p">
          Downloads: {img.downloads}
        </Typography>
        <Typography id="collections" component="p">
          Collections: {img.collections}
        </Typography>
        <Typography id="comments" component="p">
          Comments: {img.comments}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <Box
            component="img"
            sx={{ borderRadius: "50%" }}
            src={img.userImageURL}
            alt={`Image of ${img.tags}`}
          />
          <Typography id="user" component="p">
            {img.user}
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default ImageModal;
