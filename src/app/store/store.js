import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "../../slices/favorite/favoriteSlice";
import queueReducer from "../../slices/queue/queueSlice";

export default configureStore({
  reducer: {
    queue: queueReducer,
    favorite: favoriteReducer,
  },
});
