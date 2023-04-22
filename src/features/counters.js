import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = [25, 5, 15];

export const countersSlice = createSlice({
  name: "counters",
  initialState: { value: initialStateValue },
  reducers: {
    setCounters: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setCounters } = countersSlice.actions;

export default countersSlice.reducer;
