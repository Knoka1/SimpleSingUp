import React, { useState } from "react";
import SignUp from "./components/SignUp";
import RegisteredUser from "./components/RegisteredUser";

import "./App.css";
import "./scss/styles.scss";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <div>
      <SignUp />
      <div>
        <RegisteredUser />
      </div>
    </div>
  );
}

export default App;
