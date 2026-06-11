import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppLista from "./AppLista";
import AppEmail from "./AppEmail";
import AppFormularioDois from "./AppFormularioDois";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <AppLista />
    <AppEmail />
    <AppFormularioDois />
  </React.StrictMode>,
);
