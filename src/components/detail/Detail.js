import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Detail.scss";
import Overview from "./Overview";
import Character from "./Character";
import Review from "./Review";

function Detail() {
  const overview = "overview";
  const character = "character";
  const review = "review";
  const [detail, setDetail] = useState(overview);
  return (
    <div className="Detail">
      <div className="container">
        <div className="banner">
          <img src={require("../home/images/sonic.jpg")} alt="" />
          <div className="banner-body flex x-center column">
            <div className="upper">
              <h1>Title</h1>
              <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
              <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
              <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
              <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
              <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
              <FontAwesomeIcon className="icon-logo" icon={["fa", "star"]} />
              <FontAwesomeIcon
                className="icon-logo"
                icon={["fa", "star-half-alt"]}
              />
              <FontAwesomeIcon className="icon-logo" icon={["far", "star"]} />
              <FontAwesomeIcon className="icon-logo" icon={["far", "star"]} />
              <FontAwesomeIcon className="icon-logo" icon={["far", "star"]} />
              &emsp;
              <span>6.7/10</span>
              &emsp;
              <span>( 200 Reviews )</span>
            </div>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
              odit accusamus? Deleniti odit incidunt nulla maiores minima
              similique vel, aut consectetur dolore enim dolorem sed nisi
              nostrum voluptas laboriosam odio?
            </p>
            <div className="link">
              <a href="/detail#">Watch Trailer</a>
              <a className="watch-list" href="/detail#">
                Add to Watchlist
              </a>
            </div>
          </div>
        </div>
        <div className="flex wrap link-wrapper">
          <span
            onClick={() => setDetail(overview)}
            className={detail === overview ? "active" : ""}
          >
            Overview
          </span>
          <span
            onClick={() => setDetail(character)}
            className={detail === character ? "active" : ""}
          >
            Characters
          </span>
          <span
            onClick={() => setDetail(review)}
            className={detail === review ? "active" : ""}
          >
            Review
          </span>
        </div>
        {detail === overview ? <Overview /> : false}
        {detail === character ? <Character /> : false}
        {detail === review ? <Review /> : false}
      </div>
    </div>
  );
}

export default Detail;
