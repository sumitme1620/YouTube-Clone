import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";

const myStore = configureStore({
  reducer: {
    app: appSlice.reducer,
    chat: chatSlice.reducer,
  },
});

export default myStore;
