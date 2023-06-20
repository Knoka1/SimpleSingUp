import { useState } from "react";
import { Tooltip, Toast, Popover } from "bootstrap";
import * as bootstrap from "bootstrap";
import Alert from "bootstrap/js/dist/alert";
import DatePicker from "react-datepicker";

import "./App.css";
import "./scss/styles.scss";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  return (
    <div className="signup template d-flex justify-content-center align-items-center vh-100 bg-primary">
      <div className="form_container p-5 rounded bg-white">
        <form>
          <h3 className="text-center">Sign Up</h3>
          <div className="mb-2">
            <label htmlForm="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control"
            />
          </div>
          <div className="mb-2">
            <label htmlForm="password">Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              className="form-control"
            />
          </div>
          <div>
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label ms-2">
              Remeber me
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
