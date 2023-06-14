import {
  tenderDataSuccess,
  hasError,
  getTenderSuccess,
  tenderCountSuccess,
} from "../slice/tender.slice";
import { axio } from "../../utils/axios";
import { notifications } from "@mantine/notifications";
export const tenders = () => async (dispatch) => {
  await axio
    .get("/tender")
    .then((response) => {
      dispatch(tenderDataSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const addTender = (body) => async (dispatch) => {
  console.log(body,"ac")
  await axio
    .post("/tender", body)
    .then(() => {
      notifications.show({
        title: "Success",
        message: "Succesfully Add Tender",
        autoClose: 8000,
      });
      return true;
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

export const getOneTender = (id) => async (dispatch) => {
  await axio
    .get("/task/" + id)
    .then((response) => {
      dispatch(getTenderSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};



export const tenderCount = () => async (dispatch) => {
  await axio
    .get("/tender/count")
    .then((response) => {
      dispatch(tenderCountSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};