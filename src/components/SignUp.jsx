import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "../scss/styles.scss";
import "react-datepicker/dist/react-datepicker.css";
import "./SignUp.css";
const SignUp = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="form_container p-5 box rounded ">
        <form>
          <div className="container">
            <div className="row">
              <div className="col">
                <h3 className="text-left title">S'inscrire</h3>
                <h6 className="subText text-left">C'est rapide et facile</h6>
              </div>
              <div className="col"></div>
              <hr color="gray" />
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
              <input
                type="email"
                placeholder="Número de mobille ou e-mail"
                className="form-control"
              />
            </div>
            <div className="mb-2">
              <label htmlFor="naissance" className="label">
                Date de naissance
              </label>
              <br />
              <DatePicker
                className="form-control"
                selected={date}
                onChange={(date) => setDate(date)}
              />
            </div>
            <div className="">
              <label htmlFor="genre" className="label">
                Genre
              </label>
              <div className="row mb-2">
                <div className="col">
                  <input
                    type="radio"
                    id="customRadioInline1"
                    name="customRadioInline1"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline1"
                  >
                    Femme
                  </label>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    id="customRadioInline1"
                    name="customRadioInline1"
                    className="custom-control-input"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customRadioInline1"
                  >
                    Homme
                  </label>
                </div>
              </div>
            </div>
            <label htmlFor="photo" className="label">
              Photo
            </label>

            <div className="form-group stylized_box mb-5">
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
              />
              <small>ou déposer des fichiers ici</small>
            </div>
            <small className="form-text text-muted">
              En cliquant sur S'inscrire, vous acceptez nos{" "}
              <a href="#">Condition générales</a>. Découvrez comment nous
              recueillon, utilisons e partageons vos données en lisant notre{" "}
              <a href="#">Politique de confidentialité</a> et comment nous
              utilisons les cookies et autres technologies similaires en
              consultant notre{" "}
              <a href="#">Politique d'utilisation des cookies</a>. Vous recevrez
              peut-être des notifications par texto de notre part et vous pouvez
              à tout moment vous désabonner.
            </small>
            <div className="d-grid mt-2">
              <button className=" ">S'inscrire</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
