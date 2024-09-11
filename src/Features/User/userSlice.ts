import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "./type";
// import { AppThunk } from "../../Store/store";
// import { axios /*axiosWithAuth*/ } from "../utils";
// import axiosWithAuth from "../utils";
// import { clearErrors, setError /*setSuccess*/ } from "../Error/errorSlice";

const initialState: IUserState = {
  isLoading: false,
  userId: "",
  isDefaultPassword: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },

    setLastRoute: (state, { payload }: PayloadAction<string>) => {
      state.lastRoute = payload;
    },
    setLogout: (state) => {
      state.header = "";
      state.isAuth = false;
      state.isLoading = false;
    },

    setISAuth: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuth = payload;
    },
    setHeader: (state, { payload }: PayloadAction<string>) => {
      state.header = payload;
    },
  },
});

export const { setLoading, setHeader, setLastRoute } = userSlice.actions;
export default userSlice.reducer;
