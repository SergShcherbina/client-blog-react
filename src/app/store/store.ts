import { configureStore } from "@reduxjs/toolkit";

import { userReducer } from "../../entites";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
