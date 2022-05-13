import { createSlice } from "@reduxjs/toolkit";
const favoriteSlice = createSlice({
  name: "favorite",
  initialState: { songs: [] },
  reducers: {
    addSongs: (state, actions) => {
      return {
        songs: [...state.songs, actions.payload],
      };
    },
  },
});

export default favoriteSlice.reducer;
export const { addSong } = favoriteSlice.reducer;
