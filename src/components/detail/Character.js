import React from "react";
import "./Character.scss";

export default function Character() {
  var Cast = Array.from(Array(10)).map((a, td_i, arr) => (
    <a href="/#" className="cast-wrapper">
      <img src={require("../home/images/cast.jpg")} alt="" />
      <strong>Cast Name</strong>
    </a>
  ));

  return <div className="Character">{Cast}</div>;
}
