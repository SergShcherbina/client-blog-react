import { AxiosResponse } from "axios";

import { Path } from "../../../shared";
import { instance } from "../../../shared";
import {
  IAuthRequest,
  ILoginResponse,
  ISignUpResponse,
} from "../model/types.ts";

export const authApi = {
  sighUp: async (data: IAuthRequest) => {
    return await instance.post<ISignUpResponse, AxiosResponse<ISignUpResponse>>(
      `/auth${Path.SIGNUP}`,
      {
        userName: data.email,
        password: data.password,
      },
    );
  },
  login: async (data: IAuthRequest) => {
    return await instance.post<ILoginResponse, AxiosResponse<ILoginResponse>>(
      `/auth${Path.LOGIN}`,
      {
        userName: data.email,
        password: data.password,
      },
    );
  },
};
