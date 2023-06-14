import { createSlice } from "@reduxjs/toolkit";

export const loginslice = createSlice({
  name: "login",
  initialState: {
    login: [],
    isLogin: false,
    authState: false,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.login = action.payload?.data;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
      state.isLogin = true;
      state.accessToken = action.payload?.data.accessToken;
    },
    hasError: (state, action) => {
      state.status = action.payload?.statusCode;
      state.message = action.payload?.res;
      state.error = action.payload?.error;
    },
  },
});
export const { loginSuccess, hasError } = loginslice.actions;

export default loginslice.reducer;
