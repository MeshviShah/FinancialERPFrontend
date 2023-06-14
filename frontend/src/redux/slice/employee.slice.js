import { createSlice } from "@reduxjs/toolkit";

export const employeeDataslice = createSlice({
  name: "employee",
  initialState: {
    employee: [],
    isLodding: false,
    employees: [],
    mydata:[]
  },
  reducers: {
    employeeDataSuccess: (state, action) => {
      state.employees = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
      state.isLodding = true;
    },
    hasError: (state, action) => {
      state.status = action.payload?.statusCode;
      state.message = action.payload?.res;
      state.error = action.payload?.error;
    },
    addemployeeSuccess: (state, action) => {
      state.employee = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    getemployeeSuccess: (state, action) => {
      state.employee = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    getOwnDataSuccess: (state, action) => {
      state.mydata = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    updateemployeeSuccess: (state, action) => {
      state.employee = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    deleteemployeeSuccess: (state, action) => {
      state.employee = state.employee.filter(
        (employees) => employees.id !== action.payload.id
      );
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
    removeData: (state = {}, action) => {
      state.employee = {};
    },
    employeeCountSuccess: (state, action) => {
      state.employee = action.payload;
      state.message = action.payload?.res;
      state.status = action.payload?.statusCode;
    },
  },
});
export const {
  employeeDataSuccess,
  hasError,
  updateemployeeSuccess,
  getemployeeSuccess,
  addemployeeSuccess,
  deleteemployeeSuccess,
  removeData,
  getOwnDataSuccess,
  employeeCountSuccess,
} = employeeDataslice.actions;

export default employeeDataslice.reducer;
