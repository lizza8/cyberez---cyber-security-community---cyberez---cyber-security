import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { NeuralShieldXR } from "./NeuralShieldXR";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <NeuralShieldXR />
  </StrictMode>,
);
