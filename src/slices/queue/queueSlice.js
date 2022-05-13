import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSongs = createAsyncThunk(
  "queue/getSongs",
  async (albumId, thunkAPI) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId
      );
      if (response.ok) {
        let music = await response.json();

        return music.album.tracks.data;
      } else {
        return thunkAPI.rejectWithValue();
      }
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

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
  extraReducers: {
    [getSongs.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [getSongs.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        songs: action.payload,
      };
    },
    [getSongs.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: true,
      };
    },
  },
});

export default queueSlice.reducer;

export const { addSongs } = queueSlice.actions;
