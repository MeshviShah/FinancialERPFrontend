import { createSlice } from "@reduxjs/toolkit";

export const passwordslice = createSlice({
  name: "password",
  initialState: {
    password: [],
  },
  reducers: {
    forgetPasswordSuccess: (state, action) => {
      state.password = action.payload?.data;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
      state.isLogin = true;
      
    },
    hasError: (state, action) => {
      state.status = action.payload?.statusCode;
      state.message = action.payload?.res;
      state.error = action.payload?.error;
    },
    resetPasswordSuccess: (state, action) => {
      //console.log(state.action, "slice")
      state.password = action.payload?.data;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;

     
    },
    chnagePasswordSuccess: (state, action) => {
      //console.log(state.action, "slice")
      state.password = action.payload?.data;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
      state.isLogin = true;
      //state.accessToken = action.payload?.data.accessToken;
    },
  },
});
export const { forgetPasswordSuccess, hasError, resetPasswordSuccess , chnagePasswordSuccess } =
  passwordslice.actions;

export default passwordslice.reducer;
