import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    setMessage: (state, action) => {
      if (state.message.length >= 100) {
        state.message.shift(); // Remove the first element
      }
      state.message.push(action.payload); // Add the new message
    },
  },
});

export const { setMessage } = chatSlice.actions;
export default chatSlice;
