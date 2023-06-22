import React from "react";
import "../scss/styles.scss";
import "./RegisteredUser.css";
import User from "./User";

const registeredUsersMock = [
  {
    name: "Joe Belfiore",
    img: "https://helios-i.mashable.com/imagery/articles/05BH6yfHMU3zc15O9qQmGTv/hero-image.fill.size_1248x702.v1611617371.jpg",
    gender: "Homme",
  },
  {
    name: "Bill Gates",
    img: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/Reuters_Direct_Media/BrazilOnlineReportTechnologyNews/tagreuters.com2023binary_LYNXMPEJ330OI-FILEDIMAGE.jpg?w=876&h=484&crop=1",
    gender: "Homme",
  },
  {
    name: "Mark Zuckerberg",
    img: "https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg",
    gender: "Homme",
  },
  {
    name: "Marissa Mayer",
    img: "https://s2.glbimg.com/A3fGbAKJYNudPasWaUljtGRYlSk=/620x430/e.glbimg.com/og/ed/f/original/2018/04/19/marissa_mayer.jpg",
    gender: "Femme",
  },
  {
    name: "Sundar Pichai",
    img: "https://ichef.bbci.co.uk/news/976/cpsprodpb/150B8/production/_110000268_fe81a048b.jpg",
    gender: "Homme",
  },
];

const RegisteredUser = () => {
  return (
    <div className="card mb-1 card_custom container d-flex justify-content-center align-items-center m-1">
      <h3>List of Users: </h3>
      <div className="row">
        <hr color="gray" />
      </div>
      {registeredUsersMock.map((object, i) => {
        return (
          <User
            key={i}
            img={object.img}
            name={object.name}
            gender={object.gender}
          />
        );
      })}
    </div>
  );
};

export default RegisteredUser;
