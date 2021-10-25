import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    origin: null,
    destination: null,
    travelInfos: null,
  },
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
    setTravelInfos: (state, action) => {
      state.travelInfos = action.payload;
    },
  },
});

export const { setDestination, setOrigin, setTravelInfos } =
  locationSlice.actions;
export default locationSlice.reducer;
