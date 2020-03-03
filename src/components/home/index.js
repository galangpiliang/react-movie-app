import React from "react";
import { Link } from "react-router-dom";
import Slider from "./slider";

export default function index() {
  return (
    <div className="Home">
      <div className="container">
        <Slider />
        <h3> Browse by category</h3>
        {/* <Link to="/detail">Go Detail</Link> */}
        <div className="flex link-wrapper">
          <a href="/#">All</a>
          <a href="/#">Action</a>
          <a href="/#">Adventure</a>
          <a href="/#">Comedy</a>
          <a href="/#">Science Fiction</a>
        </div>
        <div className="movie-group">
          <div className="movie-wrapper flex column">
            <img src={require("./images/poster.jpg")} alt="" />
            <strong>Title</strong>
            <span>Category</span>
          </div>
        </div>
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
