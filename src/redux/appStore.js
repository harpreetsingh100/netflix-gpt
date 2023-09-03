import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import filmReducer from "../redux/filmSlice";
import gptReducer from "../redux/gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    film: filmReducer,
    gpt: gptReducer,
  },
});

export default appStore;
