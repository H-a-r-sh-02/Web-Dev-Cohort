import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import "./styles/theme.css";
import "./styles/auth.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store = {store}>
    <App />
    </Provider>
  </StrictMode>,
);
