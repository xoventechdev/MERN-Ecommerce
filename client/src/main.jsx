import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/css/demo.css";
import "./assets/css/core.css";
import "./assets/css/theme-default.css";
import "./assets/css/editor.css";
import "./assets/css/datatables.bootstrap5.css";
import "boxicons";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
