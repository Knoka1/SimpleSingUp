import React from "react";
import "../scss/styles.scss";
import "./User.css";
const User = ({ name, img }) => {
  return (
    <div className="row no-gutters">
      <div className="col-md-2">
        <img
          src={img}
          className="card-img card_img_custom "
          alt="Avatar of registered user"
        />
      </div>
      <div className="col-md-10">
        <div className="card-body">
          <h6 className="card-title card_title_custom">{name}</h6>
          <p className="card-text card_text_custom">
            <small>Homme 11/01/1990</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
