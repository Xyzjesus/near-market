import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeContract } from "./components/utils/near";

import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root")
const root = createRoot(container);

window.nearInitPromise = initializeContract()
  .then(() => {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    );
  })
  .catch(console.error);

reportWebVitals();