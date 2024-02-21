import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import PrevButton from "../components/PrevButton";
import CategoryButton from "../components/CategoryButton";
import NextButton from "../components/NextButton";
import ImageViewer from "../components/ImageViewer";
import CategoryModal from "../components/CategoryModal";
import { useDispatch, useSelector } from "react-redux";
import { setImages } from "../state/image/imageSlice";
import { fetchImages, manageSort } from "../api/api";



const style = {
  minWidth: "360px",
  margin: "auto",
  paddingTop: "1rem",
};

const MainPage = () => {
  const category = useSelector((state) => state.category.value);
  const page = useSelector((state) => state.page.value);
  // const images = useSelector((state) => state.images.value);

  const dispatch = useDispatch();

  useEffect(() => {
    const getImages = async () => {
      const data = await fetchImages(category, page);
      dispatch(setImages(data));
    };
    getImages();
  }, [category, page, dispatch]);


  const [sortKey, setSortKey] = useState("id");
  const [orderAsc, setOrderAsc] = useState(false);

  const handleSort = async () => {
    const sortedData = await manageSort(sortKey, orderAsc, category, page);
    dispatch(setImages(sortedData));
  };

  const buttonSelectStyle = (target, value) => {
    return { background: target === value ? "#1C4966" : "" };
  };

  return (
    <Box id="main-page" sx={style}>
      <Box sx={{ display: "flex", gap: "2rem", paddingY: "2rem" }}>
        sort by:
        <Button
          sx={buttonSelectStyle(sortKey, "id")}
          variant="contained"
          onClick={() => {
            setSortKey("id");
          }}
        >
          id
        </Button>
        <Button
          sx={buttonSelectStyle(sortKey, "user")}
          variant="contained"
          onClick={() => {
            setSortKey("user");
          }}
        >
          user
        </Button>
        order by:
        <Button
          sx={buttonSelectStyle(orderAsc, true)}
          variant="contained"
          onClick={() => {
            setOrderAsc(true);
          }}
        >
          asc
        </Button>
        <Button
          sx={buttonSelectStyle(orderAsc, false)}
          variant="contained"
          onClick={() => {
            setOrderAsc(false);
          }}
        >
          desc
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            handleSort();
          }}
        >
          Sort
        </Button>
      </Box>
      <Box id="nav" sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <PrevButton />
        <CategoryButton />
        <NextButton />
      </Box>
      <ImageViewer />
      <CategoryModal
      />
    </Box>
  );
};

export default MainPage;
