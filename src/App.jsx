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
    <div className="signup template d-flex justify-content-center align-items-center vh-100">
      <div className="form_container p-5 rounded">
        <form>
          <div className="container box">
            <div className="">
              <h3 className="text-left">S'inscrire</h3>
              <h6 className="subText text-left">C'est rapide et facile</h6>
            </div>
            <div className="mb-2 row">
              <div className="col">
                <input
                  type="text"
                  placeholder="Prénom"
                  className="form-control"
                />
              </div>
              <div className="col">
                <input
                  type="nom"
                  placeholder="Nom de famille"
                  className="form-control"
                />
              </div>
            </div>
            <div className="mb-2">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                placeholder="Número de mobille ou e-mail"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="naissance">Date de naissance</label>
              <DatePicker
                className="form-control"
                selected={date}
                onChange={(date) => setDate(date)}
              />
            </div>
            <div>
              <input
                type="checkbox"
                className="custom-control custom-checkbox"
                id="check"
              />
              <label htmlFor="check">Remeber me</label>
            </div>

            <div className="d-grid">
              <button className="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
