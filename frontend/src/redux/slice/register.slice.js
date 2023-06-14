import { createSlice } from "@reduxjs/toolkit";

export const registerslice = createSlice({
  name: "register",
  initialState: {
    register: [],
  },
  reducers: {
    registerSuccess: (state, action) => {
      state.register = action.payload?.data;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    hasError: (state, action) => {
      state.status = action.payload?.status;
      state.message = action.payload?.res;
      state.error = action.payload?.error;
    },
  },
});
export const { registerSuccess, hasError } = registerslice.actions;

export default registerslice.reducer;
