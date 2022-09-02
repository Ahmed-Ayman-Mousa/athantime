import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./app/main.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

if (localStorage.getItem("theme") !== null) {
  document
    .querySelector("html")
    .setAttribute("theme", localStorage.getItem("theme"));
} else {
  localStorage.setItem("theme", "light");
}
