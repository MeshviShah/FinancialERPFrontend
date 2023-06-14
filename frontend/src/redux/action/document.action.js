import { axio } from "../../utils/axios";
import {
  addDocumentSuccess,
  documentDataSuccess,
  deleteDocumentSuccess,
  getDocumentSuccess,
  hasError,
  updateDocumentSuccess,
  documentCountSuccess,
} from "../slice/document.slice";

export const documents = (query) => async (dispatch) => {
 const searchQuery = query?.search ?? "";
  await axio
    .get(`/document/?&search=${searchQuery}`)
    .then((response) => {
      dispatch(documentDataSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const getOneDocument = (id) => async (dispatch) => {
  await axio
    .get("/document/" + id)
    .then((response) => {
      dispatch(getDocumentSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
export const addDocument = (body) => async (dispatch) => {
  console.log(body,"actyion")
  await axio
    .post("/document", body)
    .then(() => {
      return true
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};
export const updateDocument = (id, body) => async (dispatch) => {
  await axio
    .put("/document/" + id, body)
    .then((response) => {
      dispatch(updateDocumentSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const deleteDocument = (body) => async (dispatch) => {
  console.log(body,"body")
  await axio
    .delete("/document/" , {data : body})
    .then((response) => {
      dispatch(deleteDocumentSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};

export const documentCount = () => async (dispatch) => {
  await axio
    .get("/document/count")
    .then((response) => {
      dispatch(documentCountSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};