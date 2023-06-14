import { axio } from "../../utils/axios";
import {
  rolesDataSuccess,
  hasError
} from "../slice/role.slice";

export const roles = () => async (dispatch) => {
  await axio
    .get("/role")
    .then((response) => {

      dispatch(rolesDataSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};






