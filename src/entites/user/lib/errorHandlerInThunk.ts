import { AxiosError } from "axios";

export const errorHandlerInThunk = (err: unknown) => {
  if (err instanceof AxiosError) {
    if (err.response) {
      return err.response?.data.error;
    }
    return err.message;
  }
  console.error("thunkErrorHandler", err);
  return err;
};
