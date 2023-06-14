import { axio } from "../../utils/axios";
import {
  addemployeeSuccess,
  employeeDataSuccess,
  deleteemployeeSuccess,
  getemployeeSuccess,
  hasError,
  updateemployeeSuccess,
  removeData,
  getOwnDataSuccess,
  employeeCountSuccess,
  
} from "../slice/employee.slice";

export const employee = (query) => async (dispatch) => {
  const searchQuery = query?.search ?? "";
  await axio
    .get(`/user/?&search=${searchQuery}`)
    .then((response) => {
      dispatch(employeeDataSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const getOneEmployee = (id) => async (dispatch) => {
  await axio
    .get("/user/" + id)
    .then((response) => {
      dispatch(getemployeeSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
export const addEmployee = (body) => async (dispatch) => {
  //console.log(body,"body")
  await axio
    .post("/user", body)
    .then((response) => {
      //dispatch(addemployeeSuccess(response.data));
      return true
      
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
export const updateEmployee = (id, body) => async (dispatch) => {
   console.log(body, "action");
  await axio
    .put("/user/" + id, body)
    .then((response) => {
      dispatch(updateemployeeSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
export const deleteEmployee = (body) => async (dispatch) => {
  console.log(body,"body")
  await axio
    .delete("/user/" , { data: body })
    .then((response) => {
      dispatch(deleteemployeeSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
export const getEmployee = () => async (dispatch) => {
  console.log("getEmployee")
  await axio
    .get("/user/mydata" )
    .then((response) => {
      dispatch(getOwnDataSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
export const  clearData = () => async(dispatch) => {
   dispatch(removeData())
}

export const employeeCount = () => async (dispatch) => {
  await axio
    .get("/user/count")
    .then((response) => {
      dispatch(employeeCountSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};