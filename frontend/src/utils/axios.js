import axios from "axios";
const axioo = () => {
  let baseURL = "http://192.168.1.44:5002";
  let headers = {};
  const user = localStorage.getItem("accessToken");
  if (user) {
    headers = {
      Authorization: `Bearer ${user}`,
      //"Content-Type": "application/json",
      //timeout: 30000,
    };
  }
  return { headers, baseURL };
};

axios.defaults.baseURL = axioo().baseURL;
axios.defaults.headers = axioo().headers;

const axio = {
  get: async (path) => {
    const result = await axios.get(path);
    return result;
  },
  post: async (path, data) => {
    const result = await axios.post(path, data);
    return result;
  },
  put: async (path,data) => {
    const result = await axios.put(path,data);
    return result;
  },
  delete: async (path,data) => {
     const result = await axios.delete(path, data);
     return result;
  }
};
export { axio };
