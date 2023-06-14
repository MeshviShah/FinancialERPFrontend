import { axio } from "../../utils/axios";
import {
  forgetPasswordSuccess,
  hasError,
  resetPasswordSuccess,
} from "../slice/password.slice";
import { notifications } from "@mantine/notifications";
export const password = (body) => async (dispatch) => {
  //console.log(body, "action");
  await axio
    .post("/forgetpassword", body)
    .then((response) => {
      notifications.show({
        title: "Success",
        message: "Mail Sent!",
        autoClose: 8000,
      });
      dispatch(forgetPasswordSuccess(response?.data));
    })
    .catch((err) => {
  
      notifications.show({
        title: "Error",
        message: "Please Try Again",
        autoClose: 8000,
      });
      return dispatch(hasError(err.response?.data));
    });
};
export const resetPassword = (token, body) => async (dispatch) => {
  // console.log(body, "action");
  await axio
    .post("/reset-token/" + token, body)
    .then((response) => {
      notifications.show({
        title: "Success",
        message: "Password Change Successfully.",
        autoClose: 8000,
      });
      dispatch(resetPasswordSuccess(response?.data));
    })
    .catch((err) => {
      
      notifications.show({
        title: "Error",
        message: "Please Try Again",
        autoClose: 8000,
      });
      return dispatch(hasError(err.response?.data));
    });
};
export const changePassword = (body) => async (dispatch) => {
  await axio
    .post("/change-password", body)
    .then((response) => {
      notifications.show({
        title: "Success",
        message: "Succesfully Password Changed.",
        autoClose: 8000,
      });
      dispatch(resetPasswordSuccess(response?.data));
    })
    .catch((err) => {
      notifications.show({
        title: "Error",
        message: "Please Try Again.",
        autoClose: 8000,
      });
      return dispatch(hasError(err.response?.data));
    });
};
