import {
  addClientSuccess,
  clientDataSuccess,
  deleteClientSuccess,
  getClientSuccess,
  hasError,
  updateClientSuccess,
  clientCountSuccess,
} from "../slice/client.slice";
import { axio } from "../../utils/axios";
export const client = (query) => async (dispatch) => {
  const searchQuery = query?.search ?? "";
  await axio
    .get(`/client/?&search=${searchQuery}`)
    .then((response) => {
      dispatch(clientDataSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const getOneClient = (id) => async (dispatch) => {
  await axio
    .get("/client/" + id)
    .then((response) => {
      dispatch(getClientSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const addClient = (body) => async (dispatch) => {
  await axio
    .post("/client", body)
    .then(() => {
      return true
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
export const updateClient = (id, body) => async (dispatch) => {
  await axio
    .put("/client/" + id, body)
    .then((response) => {
      dispatch(updateClientSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const deleteClient = (id) => async (dispatch) => {
  await axio
    .delete("/client/" , {data:id})
    .then((response) => {
      dispatch(deleteClientSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const clientCount = () => async(dispatch)=> {
  await axio
    .get("/client/count")
    .then((response) => {
      dispatch(clientCountSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
}