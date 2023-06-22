import React, { useState, useEffect } from "react";
import SignUp from "./components/SignUp";
import RegisteredUser from "./components/RegisteredUser";

import "./App.css";
import "./scss/styles.scss";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  const updateMedia = () => {
    setIsMobile(window.innerWidth <= 600);
  };
  return (
    <>
      {isMobile ? (
        <div className="bg-color d-flex-inline">
          <div className=" bg-color2">
            <SignUp />
          </div>
          <div className="d-flex bg-color3 justify-content-center align-items-center">
            <RegisteredUser />
          </div>
        </div>
      ) : (
        <div className="bg-color d-flex">
          <div className=" bg-color2">
            <SignUp />
          </div>
          <div className="d-flex bg-color3 justify-content-center align-items-center">
            <RegisteredUser />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
