import React from "react";
import "../scss/styles.scss";
import "./RegisteredUser.css";
const RegisteredUser = () => {
  return (
    <div className="card mb-3 card_custom container">
      <h3>List of Users: </h3>
      <hr />
      <div className="row no-gutters">
        <div className="col-md-2">
          <img
            src="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg"
            className="card-img card_img_custom "
            alt="Registered user"
          />
        </div>

        <div className="col-md-10">
          <div className="card-body">
            <h6 className="card-title">Mark Zuckerberg</h6>
            <p className="card-text">
              <small>Homme 11/01/1990</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisteredUser;
