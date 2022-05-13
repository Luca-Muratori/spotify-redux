import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSongs = createAsyncThunk(
  "song/getSongs",
  async (url, thunkAPI) => {
    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        return data.data;
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
  initialState: { songs: [], loading: false, error: false },
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
