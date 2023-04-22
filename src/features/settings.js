import { createSlice } from "@reduxjs/toolkit";
const initialStateValue = false;
export const settingsSlice = createSlice({
  name: "settings",
  initialState: { value: initialStateValue },
  reducers: {
    setSettings: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
