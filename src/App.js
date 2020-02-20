import React from "react";
import "./App.css";
import Animbg from "./Animbg";

function App() {
  return (
    <div className="App">
      <div className="balloon-animation">
        <Animbg
          src="./assets/cloud.png"
          className="anim-bg flying-cloud"
          ratioX="0.36"
          ratioY="0.34"
        />
      </div>
    </div>
  );
}

export default App;
