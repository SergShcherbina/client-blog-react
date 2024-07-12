import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app/ui/App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
