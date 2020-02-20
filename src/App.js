import React from "react";
import "./App.css";
import "./Animbg.css";
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
        <Animbg
          src="./assets/cloud.png"
          className="anim-bg flying-cloud"
          ratioX="0.25"
          ratioY="0.23"
          alt="cloud"
        />
        <Animbg
          src="./assets/cloud.png"
          className="anim-bg flying-cloud"
          ratioX="0.19"
          ratioY="0.38"
          alt="cloud"
        />
        <Animbg
          src="./assets/cloud.png"
          className="anim-bg flying-cloud"
          ratioX="0.11"
          ratioY="0.09"
          alt="cloud"
        />
        <Animbg
          src="./assets/cloud.png"
          className="anim-bg flying-cloud"
          ratioX="0.13"
          ratioY="0.53"
          alt="cloud"
        />
        <Animbg
          src="./assets/cloud.png"
          className="anim-bg flying-cloud"
          ratioX="0.23"
          ratioY="0.42"
          alt="cloud"
        />
        <Animbg
          src="./assets/balloon.png"
          className="anim-bg flying-balloon"
          ratioX="0.07"
          ratioY="0.31"
          alt=""
        />
      </div>
    </div>
  );
}

export default App;
