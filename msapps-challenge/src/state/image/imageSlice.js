import { createSlice } from "@reduxjs/toolkit";

const mock_images_list = [
    {
      collections: 2586,
      comments: 444,
      downloads: 1210161,
      id: 849825,
      imageHeight: 2000,
      imageSize: 1300949,
      imageWidth: 3000,
      largeImageURL:
        "https://pixabay.com/get/g142018fddfb6f5cbe928a2c79be52e2838307c760472e414645c1d55514f8f742abc4f00db86c251c6330f50afbb5cc6f615ef5372b9a99c4ffd031c20383deb_1280.jpg",
      likes: 2047,
      pageURL: "https://pixabay.com/photos/student-typing-keyboard-text-849825/",
      previewHeight: 99,
      previewURL:
        "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_150.jpg",
      previewWidth: 150,
      tags: "student, typing, keyboard",
      type: "photo",
      user: "StartupStockPhotos",
      userImageURL:
        "https://cdn.pixabay.com/user/2018/01/17/16-45-10-30_250x250.jpg",
      user_id: 690514,
      views: 2000949,
      webformatHeight: 426,
      webformatURL:
        "https://pixabay.com/get/g33d814dcb0e75dcdc771dc89884a6fc92c6f2406c1d3de3fe15d11da4a7238ee3cdfac60b2769be6200de0a393ecccbb_640.jpg",
      webformatWidth: 640,
    },
    {
      collections: 2586,
      comments: 444,
      downloads: 1210161,
      id: 849825,
      imageHeight: 2000,
      imageSize: 1300949,
      imageWidth: 3000,
      largeImageURL:
        "https://pixabay.com/get/g142018fddfb6f5cbe928a2c79be52e2838307c760472e414645c1d55514f8f742abc4f00db86c251c6330f50afbb5cc6f615ef5372b9a99c4ffd031c20383deb_1280.jpg",
      likes: 2047,
      pageURL: "https://pixabay.com/photos/student-typing-keyboard-text-849825/",
      previewHeight: 99,
      previewURL:
        "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_150.jpg",
      previewWidth: 150,
      tags: "student, typing, keyboard",
      type: "photo",
      user: "StartupStockPhotos",
      userImageURL:
        "https://cdn.pixabay.com/user/2018/01/17/16-45-10-30_250x250.jpg",
      user_id: 690514,
      views: 2000949,
      webformatHeight: 426,
      webformatURL:
        "https://pixabay.com/get/g33d814dcb0e75dcdc771dc89884a6fc92c6f2406c1d3de3fe15d11da4a7238ee3cdfac60b2769be6200de0a393ecccbb_640.jpg",
      webformatWidth: 640,
    },
    {
      collections: 2586,
      comments: 444,
      downloads: 1210161,
      id: 849825,
      imageHeight: 2000,
      imageSize: 1300949,
      imageWidth: 3000,
      largeImageURL:
        "https://pixabay.com/get/g142018fddfb6f5cbe928a2c79be52e2838307c760472e414645c1d55514f8f742abc4f00db86c251c6330f50afbb5cc6f615ef5372b9a99c4ffd031c20383deb_1280.jpg",
      likes: 2047,
      pageURL: "https://pixabay.com/photos/student-typing-keyboard-text-849825/",
      previewHeight: 99,
      previewURL:
        "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_150.jpg",
      previewWidth: 150,
      tags: "student, typing, keyboard",
      type: "photo",
      user: "StartupStockPhotos",
      userImageURL:
        "https://cdn.pixabay.com/user/2018/01/17/16-45-10-30_250x250.jpg",
      user_id: 690514,
      views: 2000949,
      webformatHeight: 426,
      webformatURL:
        "https://pixabay.com/get/g33d814dcb0e75dcdc771dc89884a6fc92c6f2406c1d3de3fe15d11da4a7238ee3cdfac60b2769be6200de0a393ecccbb_640.jpg",
      webformatWidth: 640,
    },
    {
      collections: 2586,
      comments: 444,
      downloads: 1210161,
      id: 849825,
      imageHeight: 2000,
      imageSize: 1300949,
      imageWidth: 3000,
      largeImageURL:
        "https://pixabay.com/get/g142018fddfb6f5cbe928a2c79be52e2838307c760472e414645c1d55514f8f742abc4f00db86c251c6330f50afbb5cc6f615ef5372b9a99c4ffd031c20383deb_1280.jpg",
      likes: 2047,
      pageURL: "https://pixabay.com/photos/student-typing-keyboard-text-849825/",
      previewHeight: 99,
      previewURL:
        "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_150.jpg",
      previewWidth: 150,
      tags: "student, typing, keyboard",
      type: "photo",
      user: "StartupStockPhotos",
      userImageURL:
        "https://cdn.pixabay.com/user/2018/01/17/16-45-10-30_250x250.jpg",
      user_id: 690514,
      views: 2000949,
      webformatHeight: 426,
      webformatURL:
        "https://pixabay.com/get/g33d814dcb0e75dcdc771dc89884a6fc92c6f2406c1d3de3fe15d11da4a7238ee3cdfac60b2769be6200de0a393ecccbb_640.jpg",
      webformatWidth: 640,
    },
    {
      collections: 2586,
      comments: 444,
      downloads: 1210161,
      id: 849825,
      imageHeight: 2000,
      imageSize: 1300949,
      imageWidth: 3000,
      largeImageURL:
        "https://pixabay.com/get/g142018fddfb6f5cbe928a2c79be52e2838307c760472e414645c1d55514f8f742abc4f00db86c251c6330f50afbb5cc6f615ef5372b9a99c4ffd031c20383deb_1280.jpg",
      likes: 2047,
      pageURL: "https://pixabay.com/photos/student-typing-keyboard-text-849825/",
      previewHeight: 99,
      previewURL:
        "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_150.jpg",
      previewWidth: 150,
      tags: "student, typing, keyboard",
      type: "photo",
      user: "StartupStockPhotos",
      userImageURL:
        "https://cdn.pixabay.com/user/2018/01/17/16-45-10-30_250x250.jpg",
      user_id: 690514,
      views: 2000949,
      webformatHeight: 426,
      webformatURL:
        "https://pixabay.com/get/g33d814dcb0e75dcdc771dc89884a6fc92c6f2406c1d3de3fe15d11da4a7238ee3cdfac60b2769be6200de0a393ecccbb_640.jpg",
      webformatWidth: 640,
    },
    {
      collections: 2586,
      comments: 444,
      downloads: 1210161,
      id: 849825,
      imageHeight: 2000,
      imageSize: 1300949,
      imageWidth: 3000,
      largeImageURL:
        "https://pixabay.com/get/g142018fddfb6f5cbe928a2c79be52e2838307c760472e414645c1d55514f8f742abc4f00db86c251c6330f50afbb5cc6f615ef5372b9a99c4ffd031c20383deb_1280.jpg",
      likes: 2047,
      pageURL: "https://pixabay.com/photos/student-typing-keyboard-text-849825/",
      previewHeight: 99,
      previewURL:
        "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_150.jpg",
      previewWidth: 150,
      tags: "student, typing, keyboard",
      type: "photo",
      user: "StartupStockPhotos",
      userImageURL:
        "https://cdn.pixabay.com/user/2018/01/17/16-45-10-30_250x250.jpg",
      user_id: 690514,
      views: 2000949,
      webformatHeight: 426,
      webformatURL:
        "https://pixabay.com/get/g33d814dcb0e75dcdc771dc89884a6fc92c6f2406c1d3de3fe15d11da4a7238ee3cdfac60b2769be6200de0a393ecccbb_640.jpg",
      webformatWidth: 640,
    },
    {
      collections: 2586,
      comments: 444,
      downloads: 1210161,
      id: 849825,
      imageHeight: 2000,
      imageSize: 1300949,
      imageWidth: 3000,
      largeImageURL:
        "https://pixabay.com/get/g142018fddfb6f5cbe928a2c79be52e2838307c760472e414645c1d55514f8f742abc4f00db86c251c6330f50afbb5cc6f615ef5372b9a99c4ffd031c20383deb_1280.jpg",
      likes: 2047,
      pageURL: "https://pixabay.com/photos/student-typing-keyboard-text-849825/",
      previewHeight: 99,
      previewURL:
        "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_150.jpg",
      previewWidth: 150,
      tags: "student, typing, keyboard",
      type: "photo",
      user: "StartupStockPhotos",
      userImageURL:
        "https://cdn.pixabay.com/user/2018/01/17/16-45-10-30_250x250.jpg",
      user_id: 690514,
      views: 2000949,
      webformatHeight: 426,
      webformatURL:
        "https://pixabay.com/get/g33d814dcb0e75dcdc771dc89884a6fc92c6f2406c1d3de3fe15d11da4a7238ee3cdfac60b2769be6200de0a393ecccbb_640.jpg",
      webformatWidth: 640,
    },
    {
      collections: 2586,
      comments: 444,
      downloads: 1210161,
      id: 849825,
      imageHeight: 2000,
      imageSize: 1300949,
      imageWidth: 3000,
      largeImageURL:
        "https://pixabay.com/get/g142018fddfb6f5cbe928a2c79be52e2838307c760472e414645c1d55514f8f742abc4f00db86c251c6330f50afbb5cc6f615ef5372b9a99c4ffd031c20383deb_1280.jpg",
      likes: 2047,
      pageURL: "https://pixabay.com/photos/student-typing-keyboard-text-849825/",
      previewHeight: 99,
      previewURL:
        "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_150.jpg",
      previewWidth: 150,
      tags: "student, typing, keyboard",
      type: "photo",
      user: "StartupStockPhotos",
      userImageURL:
        "https://cdn.pixabay.com/user/2018/01/17/16-45-10-30_250x250.jpg",
      user_id: 690514,
      views: 2000949,
      webformatHeight: 426,
      webformatURL:
        "https://pixabay.com/get/g33d814dcb0e75dcdc771dc89884a6fc92c6f2406c1d3de3fe15d11da4a7238ee3cdfac60b2769be6200de0a393ecccbb_640.jpg",
      webformatWidth: 640,
    },
    {
      collections: 2586,
      comments: 444,
      downloads: 1210161,
      id: 849825,
      imageHeight: 2000,
      imageSize: 1300949,
      imageWidth: 3000,
      largeImageURL:
        "https://pixabay.com/get/g142018fddfb6f5cbe928a2c79be52e2838307c760472e414645c1d55514f8f742abc4f00db86c251c6330f50afbb5cc6f615ef5372b9a99c4ffd031c20383deb_1280.jpg",
      likes: 2047,
      pageURL: "https://pixabay.com/photos/student-typing-keyboard-text-849825/",
      previewHeight: 99,
      previewURL:
        "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_150.jpg",
      previewWidth: 150,
      tags: "student, typing, keyboard",
      type: "photo",
      user: "StartupStockPhotos",
      userImageURL:
        "https://cdn.pixabay.com/user/2018/01/17/16-45-10-30_250x250.jpg",
      user_id: 690514,
      views: 2000949,
      webformatHeight: 426,
      webformatURL:
        "https://pixabay.com/get/g33d814dcb0e75dcdc771dc89884a6fc92c6f2406c1d3de3fe15d11da4a7238ee3cdfac60b2769be6200de0a393ecccbb_640.jpg",
      webformatWidth: 640,
    },
  ];

const initialState = { value: [] };

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    setImages: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setImages } = imageSlice.actions;

export default imageSlice.reducer;
