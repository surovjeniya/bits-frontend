import { createSlice } from "@reduxjs/toolkit";

export interface TestState {}
const initialState: TestState = {};
export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    test: (state) => {
      return state;
    },
  },
});

export const { test } = testSlice.actions;
export default testSlice.reducer;
