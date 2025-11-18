import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "../src/i18n/in18.ts";
import App from "./App.tsx";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Root element not found");
}

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
