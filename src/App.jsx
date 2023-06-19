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
    <div>
      <form>
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <DatePicker selected={date} onChange={(date) => setDate(date)} />
        <div class="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            id="customRadioInline1"
            name="customRadioInline1"
            class="custom-control-input"
          />
          <label class="custom-control-label" for="customRadioInline1">
            Toggle this custom radio
          </label>
        </div>
        <div class="custom-control custom-radio custom-control-inline">
          <input
            type="radio"
            id="customRadioInline1"
            name="customRadioInline1"
            class="custom-control-input"
          />
          <label class="custom-control-label" for="customRadioInline1">
            Toggle this custom radio
          </label>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>

        <div className="form-group">
          <label for="exampleFormControlFile1">Example file input</label>
          <input
            type="file"
            className="form-control-file"
            id="exampleFormControlFile1"
          />
        </div>
        <text>En cliquant blabla</text>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
