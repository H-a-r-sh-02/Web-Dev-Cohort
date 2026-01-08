import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./App.css";

const App = () => {
  return (
    <div>
      <DotLottieReact
      className="loader"
        src="https://lottie.host/bdf3558a-2690-41dd-a364-ac6f55264914/SV8w4DOEk9.lottie"
        loop
        autoplay
      />
    </div>
  );
};

export default App;
