//Response
import { ThunkDispatch } from "@reduxjs/toolkit";
import { UnknownAction } from "redux";

export interface ISignUpResponse {
  message: string;
}

export interface ILoginResponse {
  accessToken: string;
  message: string;
  user: iUser;
}

export interface iUser {
  userName: string;
  id: string;
}

//Request
export interface IAuthRequest {
  email: string;
  password: string;
}

//Redux
export type AsyncThunkConfig = {
  state?: unknown;
  dispatch?: ThunkDispatch<unknown, unknown, UnknownAction>;
  extra?: unknown;
  rejectValue?: string;
  serializedErrorType?: unknown;
  pendingMeta?: unknown;
  fulfilledMeta?: unknown;
  rejectedMeta?: unknown;
};
