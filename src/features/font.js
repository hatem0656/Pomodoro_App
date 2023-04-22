import { createSlice } from "@reduxjs/toolkit";
import { Fonts } from "../helpers/Variables";
const initialStateValue = Fonts[0].name;

export const fontSlice = createSlice({
  name: "font",
  initialState: { value: initialStateValue },
  reducers: {
    setFont: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFont } = fontSlice.actions;

export default fontSlice.reducer;
