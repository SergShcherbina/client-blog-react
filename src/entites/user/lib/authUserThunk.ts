import { createAsyncThunk } from "@reduxjs/toolkit";

import { LSKeys } from "../../../shared";
import { authApi } from "../api/authApi.ts";
import {
  AsyncThunkConfig,
  IAuthRequest,
  ILoginResponse,
  ISignUpResponse,
} from "../model/types.ts";
import { errorHandlerInThunk } from "./errorHandlerInThunk.ts";

export const loginThunk = createAsyncThunk<
  ILoginResponse,
  IAuthRequest,
  AsyncThunkConfig
>(
  "user/login",
  async (args: IAuthRequest, { fulfillWithValue, rejectWithValue }) => {
    try {
      const res = await authApi.login(args);
      localStorage.setItem(LSKeys.ACCESS_TOKEN, res.data.accessToken);
      return fulfillWithValue(res.data);
    } catch (err: unknown) {
      const errorMessage = errorHandlerInThunk(err);
      return rejectWithValue(errorMessage);
    }
  },
);

export const signUpThunk = createAsyncThunk<
  ISignUpResponse,
  IAuthRequest,
  AsyncThunkConfig
>("user/signUp", async (args, { fulfillWithValue, rejectWithValue }) => {
  try {
    const res = await authApi.sighUp(args);
    return fulfillWithValue(res.data);
  } catch (err: unknown) {
    const errorMessage = errorHandlerInThunk(err);
    return rejectWithValue(errorMessage);
  }
});
