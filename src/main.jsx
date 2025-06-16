import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Add from "./parts/Add.jsx";
import NewCalcu from "./parts/NewCalcu.jsx";

createRoot(document.getElementById("root")).render(
  <div className="">
    <StrictMode>
      <App />
    </StrictMode>
  </div>
);
