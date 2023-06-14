import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../redux/slice/login.slice";
import registerReducer from "../redux/slice/register.slice";
import clientDataReducer from "../redux/slice/client.slice";
import employeeDataReducer from "../redux/slice/employee.slice"
import passwordReducer from "../redux/slice/password.slice"
import taskReducer from "../redux/slice/task.slice"
import roleDataReducer from "../redux/slice/role.slice";
import imageUploadReducer from "../redux/slice/imageUpload.slice"
import documentReducer from "../redux/slice/document.slice";
import serviceReducer from "../redux/slice/service.slice"
import tenderReducer from "../redux/slice/tender.slice"
const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    clientData: clientDataReducer,
    employeeData: employeeDataReducer,
    password: passwordReducer,
    task: taskReducer,
    role: roleDataReducer,
    image:imageUploadReducer,
    document:documentReducer,
    service:serviceReducer,
    tender:tenderReducer,
  },
  });
export { store };
