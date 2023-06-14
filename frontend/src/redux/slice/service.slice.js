import { createSlice } from "@reduxjs/toolkit";

export const serviceDataslice = createSlice({
  name: "service",
  initialState: {
    service: [],
  },
  reducers: {
    serviceDataSuccess: (state, action) => {
      state.service = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.status;
    },
    hasError: (state, action) => {
      state.status = action.payload?.statusCode;
      state.message = action.payload?.res;
      state.error = action.payload?.error;
    },
  },
});
export const { serviceDataSuccess, hasError } = serviceDataslice.actions;

export default serviceDataslice.reducer;
