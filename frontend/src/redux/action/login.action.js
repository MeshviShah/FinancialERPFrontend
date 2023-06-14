import { axio } from "../../utils/axios";
import { loginSuccess, hasError } from "../slice/login.slice";
import { notifications } from "@mantine/notifications";

 
export const login = (body) => async (dispatch) => {
  //console.log(body,"action")
  await axio
    .post("/login", body)
    .then((response) => {
      dispatch(loginSuccess(response.data));
      
    })
    .catch((err) => {
     
      const message = err.response?.data.res
       notifications.show({
         title: "Error",
         message: message,
         autoClose: 8000,
       });
      return dispatch(hasError(err.response?.data));
    });

    
};


