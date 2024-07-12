import "../styles/index.css";

import { createTheme, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import { router } from "../rourer/router.tsx";
import { store } from "../store/store.ts";

const theme = createTheme({
  palette: {
    primary: {
      light: "rgba(255, 255, 255, 0)",
      main: "#000",
      contrastText: "#fff",
    },
  },
});

export function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}
