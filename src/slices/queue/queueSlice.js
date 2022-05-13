import { createSlice } from "@reduxjs/toolkit";

const queueSlice = createSlice({
  name: "queue",
  initialState: { songs: [] },
  reducers: {
    addSongs: (state, actions) => {
      return {
        songs: [...state.songs, actions.payload],
      };
    },
  },
});

export default queueSlice.reducer;
export const { addSong } = queueSlice.reducer;
