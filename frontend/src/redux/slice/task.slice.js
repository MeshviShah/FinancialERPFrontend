import { createSlice } from "@reduxjs/toolkit";

export const Taskslice = createSlice({
  name: "task",
  initialState: {
    task: [],
    //isLodding: false,
    tasks: [],
  },
  reducers: {
    taskDatasSuccess: (state, action) => {
      state.tasks = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.status;
      //state.isLodding = false;
    },
    hasError: (state, action) => {
      state.status = action.payload?.statusCode;
      state.message = action.payload?.res;
      state.error = action.payload?.error;
    },
  
    getTaskSuccess: (state, action) => {
      state.task = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    updateTaskSuccess: (state, action) => {
      state.task = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    deleteTaskSuccess: (state, action) => {
      state.task = state.task.filter((tasks) => tasks.id !== action.payload.id);
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    taskCountSuccess: (state, action) => {
      state.task = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
  },
});
export const {
  getTaskSuccess,
  taskDatasSuccess,
  updateTaskSuccess,
  hasError,
  deleteTaskSuccess,
  addTaskSuccess,
  taskCountSuccess,
} = Taskslice.actions;

export default Taskslice.reducer;
