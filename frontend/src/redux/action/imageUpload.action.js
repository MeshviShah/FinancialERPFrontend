
import {axio} from "../../utils/axios"
import{imageUploadSuccess , hasError, tenderUploadSuccess} from "../slice/imageUpload.slice"

export const imageUpload = (formData) => async(dispatch) => {
  // console.log(formData,"formData")
    await axio
      .post("/user/upload", formData )
      .then((response) => {
        
        dispatch(imageUploadSuccess(response.data));
      })
      .catch((err) => {
        return dispatch(hasError(err.response?.data));
      });
};


export const tenderFile = (formData) => async (dispatch) => {
 
  await axio
    .post("/tender/upload", formData)
    .then((response) => {

      dispatch(tenderUploadSuccess(response.data));
    })
    .catch((err) => {
      return dispatch(hasError(err.response?.data));
    });
};