import React, { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import PrevButton from "../components/PrevButton";
import CategoryButton from "../components/CategoryButton";
import NextButton from "../components/NextButton";
import ImageViewer from "../components/ImageViewer";
import CategoryModal from "../components/CategoryModal";
import { useDispatch, useSelector } from "react-redux";
import { setImages } from '../state/image/imageSlice';

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
  minWidth: "360px",
  margin: "auto",
  paddingTop: "1rem",
};

const MainPage = () => {
  const localhost = `http://localhost:8000`;
  const PER_PAGE = 9;

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState(mock_category_list[0].name);
  const page = useSelector((state) => state.page.value);
  const images = useSelector((state) => state.images.value);

  const dispatch = useDispatch()

  // useEffect(() => {
  //   const fetchImages = async () => {
  //     let url = `${localhost}/category?category=${category}&page=${page}&per_page=${PER_PAGE}`;
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     dispatch(setImages(data.hits))
  //   };
  //   fetchImages();
  // }, [localhost, category, page, dispatch]);

  const handleCategoryModalClose = () => {
    setIsCategoryModalOpen(false);
  };

  const [sortKey, setSortKey] = useState("id");
  const [orderAsc, setOrderAsc] = useState(false);

  const handleSort = () => {
    const sortImagesFetch = async () => {
      let url = `${localhost}/sort`;
      const dto = {
        list_to_sort: images,
        sort_by: sortKey,
        order_asc: orderAsc,
      };
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
      });
      const data = await response.json();
      dispatch(setImages(data))
    };
    if (sortKey === undefined || orderAsc === undefined) return;
    sortImagesFetch();
  };

  const buttonSelectStyle = (target, value) =>  {return { background: target === value ? "#1C4966" : "" }};

  return (
    <Box id="main-page" sx={style}>
      current page:{page}
      <br></br>
      sort by value:{sortKey}
      <br></br>
      order Asc:{orderAsc !== undefined ? orderAsc.toString() : ""}
      <br></br>
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
        <CategoryButton setIsOpen={setIsCategoryModalOpen} />
        <NextButton />
      </Box>
      <ImageViewer />
      <CategoryModal
        isOpen={isCategoryModalOpen}
        handleClose={handleCategoryModalClose}
        categoryList={mock_category_list}
        setCategory={setCategory}
      />
    </Box>
  );
};

export default MainPage;
