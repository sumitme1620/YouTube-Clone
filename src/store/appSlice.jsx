import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    open: true,
    video: [],
    category: "All",
    searchSuggetion: [],
  },
  reducers: {
    // Actions
    toggleSidebar: (state) => {
      state.open = !state.open;
    },
    setHomeVideo: (state, action) => {
      state.video = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSearchSuggetion: (state, action) => {
      state.searchSuggetion = action.payload;
    },
  },
});

export const { toggleSidebar, setHomeVideo, setCategory, setSearchSuggetion } =
  appSlice.actions;

export default appSlice;
