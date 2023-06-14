import { createSlice } from "@reduxjs/toolkit";

export const DocumentSlice = createSlice({
  name: "document",
  initialState: {
    document: [],
    isLodding: false,
    documents:[],
  },
  reducers: {
    documentDataSuccess: (state, action) => {
      state.documents = action.payload;
      state.message = action.payload?.res;
      state.isLodding = true;
    },
    hasError: (state, action) => {
      state.status = action.payload?.statusCode;
      state.message = action.payload?.res;
      state.error = action.payload?.error;
    },
    addDocumentSuccess: (state, action) => {
      state.document = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    getDocumentSuccess: (state, action) => {
      state.document = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    updateDocumentSuccess: (state, action) => {
      state.document = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    deleteDocumentSuccess: (state, action) => {
      state.document = state.document.filter(
        (document) => document.id !== action.payload.id
      );
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    documentCountSuccess: (state, action) => {
      state.document = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.status;
    
    },
  },
});
export const {
  documentDataSuccess,
  hasError,
  updateDocumentSuccess,
  getDocumentSuccess,
  addDocumentSuccess,
  deleteDocumentSuccess,
  documentCountSuccess,
} = DocumentSlice.actions;

export default DocumentSlice.reducer;
