import { createSlice } from "@reduxjs/toolkit";
const favoriteSlice = createSlice({
  name: "favorite",
  initialState: { favorites: [] },
  reducers: {
    addFavorite: (state, action) => {
      return {
        favorites: [...state.favorites, action.payload],
      };
    },
    removeFromFavorite: (state, action) => {
      return {
        songs: state.songs.filter(
          (song) => state.favorites.title !== action.payload
        ),
      };
    },
  },
});

export default favoriteSlice.reducer;
export const { addFavorite, removeFromFavorite } = favoriteSlice.actions;
