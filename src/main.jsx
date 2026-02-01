import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Customer-View.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
