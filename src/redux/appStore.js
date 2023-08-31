import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import filmReducer from "../redux/filmSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    film: filmReducer,
  },
});

export default appStore;
