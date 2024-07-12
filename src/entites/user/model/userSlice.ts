import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { loginThunk } from "../lib/authUserThunk.ts";
import { ILoginResponse } from "./types.ts";

export type InitialUserSliceType = {
  id: string | null;
  email: string | null;
  isLoading: boolean;
  isLoggedIn: boolean;
  errors: string | null;
  message: string | null;
};

const initialState: InitialUserSliceType = {
  id: null,
  email: null,
  isLoading: false,
  isLoggedIn: false,
  errors: null,
  message: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  selectors: {
    authErrorSelectors: (state) => state.errors,
  },
  extraReducers: (builder) => {
    builder.addCase(
      loginThunk.fulfilled,
      (state, action: PayloadAction<ILoginResponse>) => {
        state.id = action.payload.user.id;
        state.email = action.payload.user.userName.split("@")[0];
        state.isLoading = false;
        state.isLoggedIn = true;
        state.message = action.payload.message;
      },
    );
    builder
      .addMatcher(
        ({ type }) => type.endsWith("/pending"),
        (state) => {
          state.isLoading = true;
          state.errors = null;
        },
      )
      .addMatcher(
        (action) => action.type.endsWith("/rejected"),
        (state, action: PayloadAction<string>) => {
          console.log("rejected", action.payload);
          state.errors = action.payload;
        },
      );
  },
});

export const userSelectors = userSlice.selectors;
export const userReducer = userSlice.reducer;
// export const userActions = userSlice.actions;
