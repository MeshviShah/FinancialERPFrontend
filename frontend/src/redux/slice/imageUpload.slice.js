import { createSlice } from "@reduxjs/toolkit";

export const imageUploadSlice = createSlice({
  name: " image",
  initialState: {
    image: [],
    
  },
  reducers: {
    imageUploadSuccess: (state, action) => {
      console.log("imageUploadSuccess reducer called");
      console.log(state, "slice");
      state.image = action.payload;
      state.status = action.payload?.statusCode;
    },
    hasError: (state, action) => {
      state.status = action.payload?.statusCode;
      state.message = action.payload?.res;
      state.error = action.payload?.error;
    },
    tenderUploadSuccess: (state, action) => {
      console.log("imageUploadSuccess reducer called");
      console.log(state, "slice");
      state.image = action.payload;
      state.status = action.payload?.statusCode;
    },
  },
});

export const {
    imageUploadSuccess,
    tenderUploadSuccess,
    hasError
} = imageUploadSlice.actions;

export default imageUploadSlice.reducer