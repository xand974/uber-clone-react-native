import { createSlice } from "@reduxjs/toolkit";

export const animationSlice = createSlice({
  name: "animation",
  initialState: {
    expand: false,
  },
  reducers: {
    setExpandTrue: (state) => {
      state.expand = true;
    },
    setExpandFalse: (state) => {
      state.expand = false;
    },
  },
});

export const { setExpandTrue, setExpandFalse } = animationSlice.actions;
export default animationSlice.reducer;
