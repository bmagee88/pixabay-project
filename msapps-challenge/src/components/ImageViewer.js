import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ImageModal from "./ImageModal";
import { useSelector } from "react-redux";

const ImageViewer = () => {
  const images = useSelector((state) => state.images.value);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState({});
  const handleImageModalClose = () => {
    setIsImageModalOpen(false);
  };

  const [imagesReady, setImagesReady] = useState(false);
  useEffect(()=>{
    if (images) {
      setImagesReady(true);
    }
  },[images])

  useEffect(() => {
    if (!imagesReady) {
      return;
    }
  }, [imagesReady, images]);

  return (
    <>
    {!imagesReady && <p>Loading images...</p>}
      <Grid
        container
        id="image-viewer"
        rowSpacing={2}
        columnSpacing={2}
        sx={{
          width: "90%",
          margin: "auto",
          justifyContent: "center",
          maxHeight: "100vh",
        }}
      >
        {imagesReady && images.map((image) => {
          return (
            <Grid
              item
              key={image.id}
              // xs={4}
              xs={12}
              sm={8}
              md={6}
              lg={4}
              sx={{ justifyContent: "center" }}
            >
              <Box
                component="img"
                sx={{ objectFit: "cover", width: "100%" }}
                src={image.webformatURL}
                onClick={() => {
                  setIsImageModalOpen(true);
                  setActiveImage(image);
                }}
              ></Box>
            </Grid>
          );
        })}
      </Grid>
      <ImageModal
        img={activeImage}
        isOpen={isImageModalOpen}
        handleClose={handleImageModalClose}
      />
    </>
  );
};

export default ImageViewer;
