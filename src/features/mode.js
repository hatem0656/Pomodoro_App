import { createSlice } from "@reduxjs/toolkit";
import { Modes } from "../helpers/Variables";
const initialStateValue = Modes[0].name;

export const modeSlice = createSlice({
  name: "mode",
  initialState: { value: initialStateValue },
  reducers: {
    setMode: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setMode } = modeSlice.actions;

export default modeSlice.reducer;
