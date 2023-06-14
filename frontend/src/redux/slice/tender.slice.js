import { createSlice } from "@reduxjs/toolkit";

export const tenderSlice = createSlice({
  name: "tender",
  initialState: {
    tender: [],
    isLodding: false,
  },
  reducers: {
    tenderDataSuccess: (state, action) => {
      state.tender = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    hasError: (state, action) => {
      state.status = action.payload?.statusCode;
      state.message = action.payload?.res;
      state.error = action.payload?.error;
    },
    getTenderSuccess: (state, action) => {
      state.tender = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    tenderCountSuccess: (state, action) => {
      state.tender = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
  },
});
export const { tenderDataSuccess, hasError, getTenderSuccess, tenderCountSuccess } =
  tenderSlice.actions;

export default tenderSlice.reducer;
