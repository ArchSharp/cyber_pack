import Axios from "axios";
import { store } from "../Store/store";

const baseURL = "/";

export const axios = Axios.create({ baseURL, withCredentials: true }); // withCredentials: true

// export const axiosWithAuth = (token: string) =>
//   Axios.create({
//     baseURL,
//     timeout: 10000,
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   });

const axiosWithAuth = Axios.create();

axiosWithAuth.interceptors.request.use((config) => {
  const token = store.getState().user.token as string;
  config.baseURL = baseURL;
  config.timeout = 10000;
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axiosWithAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response && error.response.status === 401) {
      // console.log("Token has expired: ", error?.response?.status);

      var msg: any = {
        showAlert: true,
        content: "Token has expired, please sign in to continue",
      };
      // await store.dispatch(setShowAlert(msg));
      // await store.dispatch(setISAuth(false));

      // After getting a new token, retry the original request
      // const config = error.config;
      // const newToken = store.getState().user.token as string;
      // config.timeout = 15000;
      // config.headers.Authorization = `Bearer ${newToken}`;
      // console.log("config: ", config);

      // return Axios(config);
      return null;
    }
    // If it's not a 403 error, you can handle it as needed or re-throw the error
    return Promise.reject(error);
  }
);

export default axiosWithAuth;
