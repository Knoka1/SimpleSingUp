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
        <div className="d-flex-inline">
          <div className="">
            <SignUp />
          </div>
          <div className="">
            <div className="d-flex justify-content-center align-items-center responsive_container p-5">
              <RegisteredUser />
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex">
          <div className="">
            <SignUp />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <RegisteredUser />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
