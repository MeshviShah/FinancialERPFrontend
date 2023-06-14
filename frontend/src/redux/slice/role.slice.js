import { createSlice } from "@reduxjs/toolkit";

export const roleDataslice = createSlice({
  name: "role",
  initialState: {
    role: [],
  },
  reducers: {
    rolesDataSuccess: (state, action) => {
      state.role = action.payload;
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
export const {
  rolesDataSuccess,
  hasError,
} = roleDataslice.actions;

export default roleDataslice.reducer;
