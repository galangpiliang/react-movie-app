import React from "react";
import { Link } from "react-router-dom";
import Slider from "./slider";
import "./Home.scss";

export default function index() {
  var Movie = Array.from(Array(10)).map(() => (
    <Link to="/detail" className="movie-wrapper">
      <img src={require("./images/poster.jpg")} alt="" />
      <strong>Title</strong>
      <span>Category</span>
    </Link>
  ));

  return (
    <div className="Home">
      <div className="container">
        <Slider />
        {/* <Link to="/detail">Go Detail</Link> */}
        <h2> Browse by category</h2>
        <div className="flex wrap link-wrapper">
          <a className="" href="/#">
            All
          </a>
          <a className="active" href="/#">
            Action
          </a>
          <a className="" href="/#">
            Adventure
          </a>
          <a className="" href="/#">
            Comedy
          </a>
          <a className="" href="/#">
            Science Fiction
          </a>
        </div>
        <div className="movie-group">{Movie}</div>
        {/* <div className="movie-group flex wrap between">{Movie}</div> */}
        <div className="flex link-wrapper">
          <a href="/#">{"<--"}</a>
          <a href="/#">1</a>
          <a href="/#">2</a>
          <a href="/#">3</a>
          <a href="/#">--></a>
        </div>
      </div>
    </div>
  );
}
