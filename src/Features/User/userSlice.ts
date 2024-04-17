import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../Store/store";
import { axios /*axiosWithAuth*/ } from "../utils";
import axiosWithAuth from "../utils";
import { clearErrors, setError /*setSuccess*/ } from "../Error/errorSlice";

const initialState: any = {
  isLoading: false,
  userId: "",
  isDefaultPassword: false,
};

const userSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },

    setLogout: (state) => {},

    setISAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
  },
});

const BasePath = "TMS";

// export const reset_password = (data: IResetPassword): AppThunk => {
//   return async (dispatch) => {
//     dispatch(setLoading(true));
//     try {
//       const path = `${BasePath}/ResetPassword`;
//       // console.log("checking ResetPassword path: ", path, " data: ", data);
//       const response = await axios.put(path, data);
//       if (response) {
//         const { data } = response;
//         if (data && !data.token) {
//           if (data.error.length > 0)
//             data.error.forEach((element: string) => {
//               dispatch(setError(element));
//             });
//           else if (data.message) dispatch(setError(data.message));
//         } else if (data && data.token) {
//           // dispatch(setProfile(data.profile));
//           // dispatch(setToken(data.token));
//         }
//       }
//     } catch (error: any) {
//       dispatch(setError(error?.message));
//     }
//     dispatch(setLoading(false));
//   };
// };

// export const initiateChangePassword = (): AppThunk => {
//   return async (dispatch, getState) => {
//     dispatch(setLoading(true));
//     try {
//       const path = `${BasePath}/InitiateChangePassword`;
//       // console.log("checking ResetPassword path: ", path, " data: ", data);
//       const data = {
//         Email: await getState()?.user?.currentUser?.email,
//       };
//       const response = await axiosWithAuth.post(path, data);
//       if (response) {
//         const { data } = response;
//         console.log("InitiateChangePassword response: ", data);
//         if (data.status === true) {
//           if (data?.responseCode === "00") {
//             var msg: IAlertProps = {
//               showAlert: true,
//               content:
//                 "Code to change your password has been sent to your email",
//             };
//             dispatch(setShowAlert(msg));
//           }
//         } else {
//           // j
//         }
//       }
//     } catch (error: any) {
//       console.log("InitiateChangePassword error response: ");
//       dispatch(setError(error?.message));
//     }
//     dispatch(setLoading(false));
//   };
// };

// export const trxSummary = (): AppThunk => {
//   return async (dispatch) => {
//     dispatch(setLoading(true));
//     dispatch(clearErrors());
//     try {
//       const path = `${BasePath}/GetTransactionSummaryData`;
//       // console.log("payload: ", data);
//       const response = await axiosWithAuth.get(path);
//       if (response) {
//         const data = response.data;

//         console.log("trxSummary response: ", data);
//         if (data.status === true) {
//           if (data?.responseCode === "00") {
//             dispatch(setTransactionSummary(data?.responseData));
//           }
//         } else {
//           // j
//         }
//       }
//     } catch (error: any) {
//       console.log("trxSummary error response: ");
//       dispatch(setError(error?.message));
//     }
//     dispatch(setLoading(false));
//   };
// };

export const { setLoading } = userSlice.actions;
export default userSlice.reducer;
