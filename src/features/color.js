import { createSlice } from "@reduxjs/toolkit";
import { Colors } from "../helpers/Variables";
const initialStateValue = Colors[0].value;

export const colorSlice = createSlice({
  name: "color",
  initialState: { value: initialStateValue },
  reducers: {
    setColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setColor } = colorSlice.actions;

export default colorSlice.reducer;
