import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import filmReducer from "../redux/filmSlice";
import gptReducer from "../redux/gptSlice";
import configReducer from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    film: filmReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default appStore;
