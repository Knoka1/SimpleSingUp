import { useState } from "react";
import { Tooltip, Toast, Popover } from "bootstrap";
import * as bootstrap from "bootstrap";
import Alert from "bootstrap/js/dist/alert";
import DatePicker from "react-datepicker";

import "./App.css";
import "./scss/styles.scss";
import "react-datepicker/dist/react-datepicker.css";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <SignUp />
    </div>
  );
}

export default App;
