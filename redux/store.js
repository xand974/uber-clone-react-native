import { configureStore } from "@reduxjs/toolkit";
import animationSlice from "./animationSlice";
import locationSlice from "./locationSlice";

export default configureStore({
  reducer: {
    location: locationSlice,
    animation: animationSlice,
  },
});
