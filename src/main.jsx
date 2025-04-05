import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import Modal from "react-modal";
import NiceModal from "@ebay/nice-modal-react";

Modal.setAppElement("#root");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NiceModal.Provider>
        <App />
      </NiceModal.Provider>
    </BrowserRouter>
  </StrictMode>
);
