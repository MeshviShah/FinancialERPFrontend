import { axio } from "../../utils/axios";
import {
  serviceDataSuccess,
  hasError,
} from "../slice/service.slice";

export const services = (query) => async (dispatch) => {
  await axio
    .get(`/service`)
    .then((response) => {
      dispatch(serviceDataSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};


