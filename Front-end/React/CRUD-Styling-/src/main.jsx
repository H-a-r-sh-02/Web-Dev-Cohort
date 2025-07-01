import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Slide, ToastContainer } from "react-toastify";
import Wrapper from "./components/Wrapper.jsx";

createRoot(document.getElementById("root")).render(
    <Wrapper>
      <App />
      <ToastContainer position="top-center" theme="dark" autoClose={2000} transition={Slide} />
    </Wrapper>
);
