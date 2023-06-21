import React, { useState } from "react";
import SignUp from "./components/SignUp";
import RegisteredUser from "./components/RegisteredUser";

import "./App.css";
import "./scss/styles.scss";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div className="bg-color d-flex">
      <div className=" bg-color2">
        <SignUp />
      </div>
      <div className="d-flex bg-color3">
        <RegisteredUser />
      </div>
    </div>
  );
}

export default App;
